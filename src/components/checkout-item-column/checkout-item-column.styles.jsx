import styled from 'styled-components';
import { CheckoutImage } from '../checkout-item/checkout-item.styles';

export const CheckoutColumnBase = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantityContainer = styled(CheckoutColumnBase)`
  display: flex;
`;

export const CheckoutItemPriceContainer = styled(CheckoutColumnBase)`
`;

export const CheckoutItemImageContainer = styled(CheckoutColumnBase)`
  padding-right: 15px;
  ${CheckoutImage} {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemRemoveContainer = styled(CheckoutColumnBase)`
  width: auto;
  padding-left: 12px;
  cursor: pointer;
`;