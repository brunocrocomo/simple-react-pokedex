import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, PokemonList } from './styles';

const spriteUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function Main() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchPokemonList() {
            // Fetch Pokemon list
            const response = await api.get(`pokemon?limit=151`);
            setPokemonList(response.data.results);
        }

        fetchPokemonList();
    }, []);

    return (
        <Container>
            <PokemonList>
                {pokemonList.map((pokemon, index) => (
                    <Link key={pokemon.name} to={`/pokemon/${index + 1}`}>
                        <li>
                            <img
                                src={`${spriteUrl}/${index + 1}.png`}
                                alt="pokemon"
                            />
                            <div>
                                <strong>
                                    #{index + 1} {pokemon.name}
                                </strong>
                            </div>
                        </li>
                    </Link>
                ))}
            </PokemonList>
        </Container>
    );
}
