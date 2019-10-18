import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px;

    h1 {
        color: #fff;
        margin-bottom: 20px;
    }

    input {
        height: 50px;
        width: 100%;
        margin: 0 0 10px;
        border: 0;
        border-radius: 4px;
        padding: 0 20px;
        margin-bottom: 30px;

        font-size: 22px;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
    }

    ul {
        display: grid;
        list-style: none;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;

            min-width: 185px;

            padding: 15px 10px;
            border: 1px solid #eee;
            border-radius: 4px;

            font-size: 22px;
            text-transform: capitalize;

            background: #fff;
            transition: 0.2s;

            &:hover {
                transform: scale(1.1);
            }

            img {
                width: 96px;
                height: 96px;
                margin-bottom: 10px;
            }

            span {
                padding: 10px;
                border-top: 1px solid #ccc;
            }

            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }
`;
