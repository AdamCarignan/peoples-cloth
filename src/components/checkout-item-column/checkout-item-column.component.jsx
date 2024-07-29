import { 
    CheckoutColumnBase, 
    CheckoutItemImageContainer, 
    CheckoutItemQuantityContainer, 
    CheckoutItemPriceContainer, 
    CheckoutItemRemoveContainer
} from './checkout-item-column.styles';
export const CATEGORY_COLUMN_TYPE_CLASSES = {
    base: 'base',
    image: 'image',
    name: 'name',
    quantity: 'quantity',
    price: 'price',
    remove: 'remove'
}

const getCategoryColumn = (type = CATEGORY_COLUMN_TYPE_CLASSES.base) => 
    ({
        [CATEGORY_COLUMN_TYPE_CLASSES.base]: CheckoutColumnBase,
        [CATEGORY_COLUMN_TYPE_CLASSES.image]: CheckoutItemImageContainer,
        [CATEGORY_COLUMN_TYPE_CLASSES.quantity]: CheckoutItemQuantityContainer,
        [CATEGORY_COLUMN_TYPE_CLASSES.price]: CheckoutItemPriceContainer,
        [CATEGORY_COLUMN_TYPE_CLASSES.remove]: CheckoutItemRemoveContainer
    }[type]);

export const CheckoutItemColumn = ({ children, type, ...otherProps }) => {
    const CustomCheckoutItemColumn = getCategoryColumn(type);
    return (
        <CustomCheckoutItemColumn {...otherProps}>
            {children}
        </CustomCheckoutItemColumn>
    )
}

export default CheckoutItemColumn;