import styled from "styled-components";

export const HomeContainer = styled.main`
    display: grid;
    grid-template-columns: ${({dimension}) => dimension < 550 ? '1fr' : '125px 1fr'};
    grid-template-rows: ${({dimension}) => dimension < 550 ? '75px 1fr' : '1fr'};
`;