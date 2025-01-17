import { 
    ButtonBase, 
    GoogleButton, 
    InvertedButton 
} from '../button/button.styles';

import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${ButtonBase},
    ${GoogleButton},
    ${InvertedButton} { 
        margin-top: auto;
        font-size: 14px;
    }
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;
