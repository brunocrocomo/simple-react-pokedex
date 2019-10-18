import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px;

    h1 {
        color: #fff;
    }

    .card {
        max-width: 400px;
        padding: 10px;
        border-radius: 4px;

        background: #fff;

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;

        span {
            text-transform: capitalize;
            line-height: 16px;
        }

        aside {
            height: 100px;
            width: 100px;
            margin-right: 10px;
            border-radius: 4px;

            background: #ddd;
        }

        .types-container {
            display: flex;

            div {
                margin-top: 5px;
                margin-right: 5px;
            }
        }
    }

    .text-frame {
        height: 100px;
        width: 100%;
        padding: 10px;
        border-radius: 4px;

        font-size: 16px;

        background: #ddd;
    }
`;
