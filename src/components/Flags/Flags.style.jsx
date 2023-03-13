import styled from "styled-components";

export const FlagsContainer = styled.div`
    grid-area: ${({dimension}) => dimension < 550 ? '1 / 1 / 2 / 2' : '1 / 1 / 2 / 2'} ;
    display: flex;
    flex-direction: ${({dimension}) => dimension < 550 ? 'row' : 'column'};
    align-items: center;
    padding: 10px 20px;
    gap: 15px;

    & button {
        width: ${({dimension}) => dimension < 550 ? '55px' : '115px'};
        height: ${({dimension}) => dimension < 550 ? '55px' : '115px'};
        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }
`;