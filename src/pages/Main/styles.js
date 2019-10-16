import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
    padding: 30px;
    border-radius: 4px;

    background: #fe0065;
`;

export const PokemonList = styled.ul`
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    li {
        display: flex;
        align-items: center;

        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        font-size: 24px;
        text-transform: capitalize;

        img {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            border: 2px solid #ccc;
        }

        div {
            margin-left: 20px;
        }

        background: #fff;
    }
`;
