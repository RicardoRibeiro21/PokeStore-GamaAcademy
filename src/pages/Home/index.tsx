import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import api from '../../services/api';

interface PokemonBase {
    name: string,
    url: string
}

interface Pokemon {
    name: string,
    url: string,
    img: string,
    weight: number
}

export default function Home() {
    const [items, setItems] = useState([]);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const dados: Pokemon[] = [];
    useEffect(() => {
        api.get('?limit=20')
            .then((response) => response.data.results.map((item: PokemonBase) => {
                api.get(`/${item.name}`).then((pokemon => {
                    const objPokemon = {
                        name: pokemon.data.forms[0].name,
                        url: pokemon.data.forms[0].url,
                        img: pokemon.data.sprites.front_default,
                        weight: pokemon.data.weight
                    }
                    dados.push(objPokemon)
                    setPokemons([...dados]);
                }))
            }))
    }, [])
    console.log(pokemons);

    return (
        <div>
            <div>
                <h1> PokeStore </h1>
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <div key={index}>
                                <p>Teste</p>
                                <p>{pokemon.name}</p>
                                <p>{pokemon.url}</p>
                                <img src={`${pokemon.img} `}></img>
                                <p>{pokemon.weight}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
