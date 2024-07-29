import styled from 'styled-components';

export const ProductPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const ProductPreviewTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`;

export const ProductPreviewBody = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;