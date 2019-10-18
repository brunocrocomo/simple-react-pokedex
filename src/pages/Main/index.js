import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container } from './styles';

const spriteUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function Main() {
    const pokemonList = useRef([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);

    useEffect(() => {
        async function fetchPokemonList() {
            // Fetch Pokemon list
            const response = await api.get(`pokemon?limit=151`);
            pokemonList.current = response.data.results.map(
                (pokemon, index) => ({ ...pokemon, number: index + 1 })
            );
            setFilteredPokemonList(pokemonList.current);
        }

        fetchPokemonList();
    }, []);

    function handleOnChange(event) {
        const { value } = event.target;
        const filteredList = pokemonList.current.filter(pokemon => {
            return pokemon.name.includes(value);
        });
        setFilteredPokemonList(filteredList);
    }

    return (
        <Container>
            <h1>Simple React Pokédex!</h1>
            <div>
                <input
                    type="text"
                    placeholder="Digite o nome de um Pokémon para pesquisar!"
                    onChange={handleOnChange}
                />
                <ul>
                    {filteredPokemonList.map(pokemon => (
                        <Link
                            key={pokemon.name}
                            to={`/pokemon/${pokemon.number}`}
                        >
                            <li>
                                <img
                                    src={`${spriteUrl}/${pokemon.number}.png`}
                                    alt="pokemon"
                                />

                                <span>
                                    #{pokemon.number} {pokemon.name}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </Container>
    );
}
