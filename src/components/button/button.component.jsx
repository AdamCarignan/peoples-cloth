import {
    ButtonBase,
    GoogleButton,
    InvertedButton
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (type = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: ButtonBase,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[type]);

export const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton 
            {...otherProps}
        >
            {children}
        </CustomButton>
    );
}
export default Button;