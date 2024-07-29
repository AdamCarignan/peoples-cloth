import {
    FormInputElement,
    FormInputLabel,
    GroupContainer
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <GroupContainer>
            <FormInputElement onChange={handleChange} {...otherProps} />
            {
                label ? 
                (<FormInputLabel 
                    shrink={otherProps.value.length}
                >
                    {label}
                </FormInputLabel>)
                : null
            }
        </GroupContainer>
    );
}
export default FormInput;