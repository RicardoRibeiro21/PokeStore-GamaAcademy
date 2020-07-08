import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import api from '../../services/api';
import * as S from './styled';

interface PokemonBase {
    name: string,
    url: string
}

interface Pokemon {
    name: string,
    url: string,
    img: string,
    weight: number,
    price: string
}

export default function Home() {
    const [items, setItems] = useState([]);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const dados: Pokemon[] = [];
    const [search, setSearch] = useState<String>(String);

    useEffect(() => {
        api.get('?limit=20')
            .then((response) => response.data.results.map((item: PokemonBase) => {
                api.get(`/${item.name}`).then((pokemon => {
                    const objPokemon = {
                        name: pokemon.data.forms[0].name,
                        url: pokemon.data.forms[0].url,
                        img: pokemon.data.sprites.front_default,
                        weight: pokemon.data.weight,
                        price: String(((pokemon.data.weight / 10 ) * 3 / 2).toFixed(2))
                    }
                    dados.push(objPokemon)
                    setPokemons([...dados]);
                }))
            }))
    }, [])
    console.log(pokemons);

    //Criando o filtro
    var DataFiltra = pokemons.filter(
        (result) => {
            return result.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
    );

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setSearch(value);
    }

    function handleSelectedItem(id: number) {
        // Verificando se o item já foi selecionado 
        const alreadySelected = selectedItems.findIndex(item => item === id)
        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems);
        } else {
            // Mantendo os items que já estão selecionados e passando um novo item
            setSelectedItems([...selectedItems, id]);
        }
    }

    return (
        <S.Body>
            <div className="menu">
                <S.Input onChange={handleInputChange} />                
            </div>
            <S.Content>
                <S.ContainerCards>
                    {
                        pokemons.map((pokemon, index) => {
                            return (
                                <S.Card key={index}>                                    
                                    {/* <p>{pokemon.url}</p> */}
                                    <S.Img src={`${pokemon.img} `}></S.Img>
                                    <p>{pokemon.name}</p>
                                    <p>Peso {pokemon.weight / 10} Kg </p>
                                    <p>Preço R$ {pokemon.price}</p>
                                    <S.Button onClick={() => handleSelectedItem(index)}> Adicionar ao Carrinho </S.Button>
                                </S.Card>
                            )
                        })
                    }
                </S.ContainerCards>
                <S.Carrinho>
                    <h1> Teste do carrinho</h1>
                    {
                        selectedItems.map(item => {
                            return <p>{item}</p>
                        })
                    }
                </S.Carrinho>
            </S.Content>
        </S.Body>
    )
}
