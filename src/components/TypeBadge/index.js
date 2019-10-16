import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TypeBadge({ type }) {
    return <Container type={type}>{type.toUpperCase()}</Container>;
}

TypeBadge.propTypes = {
    type: PropTypes.oneOf([
        'normal',
        'fire',
        'fighting',
        'water',
        'flying',
        'grass',
        'poison',
        'eletric',
        'ground',
        'psychic',
        'rock',
        'ice',
        'bug',
        'dragon',
        'ghost',
        'dark',
        'steel',
        'fairy',
    ]).isRequired,
};
