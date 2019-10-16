import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
    padding: 30px;
    border-radius: 4px;

    background: #fe0065;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;

        span {
            text-transform: capitalize;
            font-size: 14px;
            line-height: 20px;
        }

        aside {
            height: 96px;
            margin-right: 10px;
            border-radius: 4px;

            background: #fff;
        }

        .types-container {
            display: flex;

            div {
                margin-right: 5px;
            }
        }
    }

    .text-frame {
        height: 96px;
        width: 100%;
        padding: 10px;
        border-radius: 4px;

        background: #fff;
    }
`;
