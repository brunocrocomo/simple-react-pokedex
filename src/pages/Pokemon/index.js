import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import TypeBadge from '../../components/TypeBadge';
import { Container } from './styles';

const spriteUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function Pokemon({ match }) {
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function fetchPokemonData() {
            const { id } = match.params;

            // Fetch Pokemon info
            let response = await api.get(`pokemon/${id}`);
            const pokemon = response.data;

            // Fetch Pokemon species info
            response = await api.get(`pokemon-species/${id}`);
            const pokemonSpecies = response.data;

            // Find Pokemon Red flavor text
            const flavorTextEntry = pokemonSpecies.flavor_text_entries.find(
                f =>
                    f.language.name === 'en' /*&& f.version.name === 'firered'*/
            );

            pokemon.flavorText = flavorTextEntry.flavor_text.replace(
                '/\n/',
                ''
            );

            setPokemonData(pokemon);
        }

        fetchPokemonData();
    }, [match.params]);

    return (
        <Container>
            <header>
                <aside>
                    <img
                        src={`${spriteUrl}/${pokemonData.id}.png`}
                        alt="pokemon"
                    />
                </aside>
                <div className="text-frame">
                    <span>
                        <strong>#{pokemonData.id}</strong> {pokemonData.name}
                    </span>
                    <br />
                    <span>
                        <strong>Height:</strong> {pokemonData.height}
                    </span>
                    <br />
                    <span>
                        <strong>Weight:</strong> {pokemonData.weight} lb
                    </span>
                    <div className="types-container">
                        {pokemonData.types &&
                            pokemonData.types.map(type => (
                                <TypeBadge
                                    key={type.type.name}
                                    type={type.type.name}
                                />
                            ))}
                    </div>
                </div>
            </header>
            <div className="text-frame">
                {pokemonData.flavorText && pokemonData.flavorText}
            </div>
        </Container>
    );
}

Pokemon.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
};
