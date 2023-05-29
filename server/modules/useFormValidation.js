import useValidators from "@modules/Validators";
import { reactive } from "@vue/reactivity";

const errors = reactive({});

export default function useFormValidation() {
  const { isEmpty, minLength, isEmail } = useValidators();

  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 4);
  };

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isEmail(fieldName, fieldValue);
  };

  const validatePasswordField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 8);
  };

  return {
    errors,
    validateNameField,
    validateEmailField,
    validatePasswordField,
  };
}
