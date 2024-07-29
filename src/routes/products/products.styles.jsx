import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px
`;

export const ProductsTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
`;