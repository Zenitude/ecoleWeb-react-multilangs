import styled from "styled-components";

export const ContentContainer = styled.section`
    grid-area: ${({dimension}) => dimension < 550 ? '2 / 1 / 3 / 3' : '1 / 2 / 3 / 3'};
    padding: 50px 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ContentTitle = styled.h1`
    font-size: calc(1.2rem + 1.5vw);
`;

export const ContentText = styled.p`
    font-size: calc(0.3rem + 2vw);
`;