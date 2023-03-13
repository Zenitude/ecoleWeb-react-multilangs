import styled from "styled-components";

export const FlagsContainer = styled.div`
    grid-area: ${({dimension}) => dimension < 550 ? '1 / 1 / 2 / 3' : '1 / 1 / 3 / 2'} ;
    display: flex;
    flex-direction: ${({dimension}) => dimension < 550 ? 'row' : 'column'};
    align-items: center;
    padding: 15px 20px;
    gap: 15px;

    & input[type="image"] {
        width: ${({dimension}) => dimension < 550 ? '55px' : '105px'};
        height: ${({dimension}) => dimension < 550 ? '55px' : '105px'};
        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }
`;