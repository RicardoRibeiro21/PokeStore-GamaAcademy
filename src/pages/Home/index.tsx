import React, { useState, useEffect, ChangeEvent } from 'react';
import api from '../../services/api';
import * as S from './styled';
import { Menu } from '../../components/navbar';
import { Pokemon, PokemonBase } from '../../interfaces/interfaces';
import ModalPokemon  from '../../components/modal';

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pokemonsSelected, setPokemonsSelected] = useState<Pokemon[]>([]);
    const [priceTotal, setPriceTotal] = useState<number>();
    const [sizeKart, setSizeKart] = useState<number>(Number);
    const dados: Pokemon[] = [];
    const [search, setSearch] = useState<String>(String);

    useEffect(() => {
        api.get('?limit=20')
            .then((response) => response.data.results.map((item: PokemonBase) => {
                api.get(`/${item.name}`).then((pokemon => {
                    const objPokemon = {
                        name: pokemon.data.forms[0].name.charAt(0).toUpperCase() + pokemon.data.forms[0].name.slice(1),
                        url: pokemon.data.forms[0].url,
                        img: pokemon.data.sprites.front_default,
                        weight: pokemon.data.weight,
                        price: String(((pokemon.data.weight / 10) * 3 / 2).toFixed(2))
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
        const { value } = event.target;

        setSearch(value);
    }

    function handleSelectedItem(pokemon: Pokemon) {
        // Verificando se o item já foi selecionado 
        const alreadySelected = pokemonsSelected.findIndex(item => item === pokemon)
        console.log(alreadySelected);
        if (alreadySelected >= 0) {
            const filteredPokes = pokemonsSelected.filter(item => item !== pokemon)
            setSizeKart(sizeKart - 1);

            setPokemonsSelected(filteredPokes);
        } else {
            // Mantendo os items que já estão selecionados e passando um novo item            
            setPokemonsSelected([...pokemonsSelected, pokemon]);
            setSizeKart(sizeKart + 1);
        }
    }

    useEffect(() => {
        let price: number = 0.00;
        pokemonsSelected.map(item => price += Number(item.price))
        setPriceTotal(price);
        console.log(priceTotal);
    }, [pokemonsSelected])

    return (
        <S.Body>
            <Menu funcao={handleInputChange} />
            <S.Content>
                <S.ContainerCards>
                    {
                        DataFiltra.map((pokemon, index) => {
                            return (
                                <S.Card key={index}>
                                    <S.Img src={pokemon.img}></S.Img>
                                    <p>{pokemon.name}</p>
                                    <p>Peso {pokemon.weight / 10} Kg </p>
                                    <p>R$ {pokemon.price}</p>
                                    <S.Button onClick={() => handleSelectedItem(pokemon)}>Adicionar ao carrinho</S.Button>
                                </S.Card>
                            )
                        })
                    }
                </S.ContainerCards>
                <S.Carrinho>
                    <div id="carrinho">
                    </div>
                    <h1> Carrinho</h1>
                    <S.Table>
                        {/* <thead>
                            <S.TableColumn></S.TableColumn>
                            <S.TableColumn>Nome</S.TableColumn>
                            <S.TableColumn>Preço</S.TableColumn>
                        </thead> */}
                        {
                            pokemonsSelected.map((pokemon, index) => {
                                return (
                                    <S.TableRow>
                                        <S.TableColumn><S.Img src={pokemon.img}></S.Img></S.TableColumn>
                                        <S.TableColumn><p>{pokemon.name}</p></S.TableColumn>
                                        <S.TableColumn><p>R$ {pokemon.price}</p></S.TableColumn>
                                    </S.TableRow>
                                )
                            })
                        }
                    </S.Table>
                    <S.CarrinhoFooter>
                        <p>Quantidade {sizeKart}</p>
                        <p>Total R$ {String(priceTotal?.toFixed(2))}</p>
                        <S.ButtonStore>Finalizar Compra</S.ButtonStore>
                    </S.CarrinhoFooter>
                </S.Carrinho>
                <ModalPokemon />
            </S.Content>
        </S.Body>
    )
}
