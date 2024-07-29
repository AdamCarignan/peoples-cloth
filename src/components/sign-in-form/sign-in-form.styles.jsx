import { Button } from '../button/button.component';

import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${Button} {
        margin: 0 0.5rem;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
`;