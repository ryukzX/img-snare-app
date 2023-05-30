export default function useValidators() {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? fieldName + " field is required" : "";
  };

  const minLength = (fieldName, fieldValue, min, max) => {
    return fieldValue.length < min
      ? `${fieldName} field must be at least ${min} chars long`
      : "";
  };

  const isEmail = (fieldName, fieldValue) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(fieldValue)
      ? fieldName + " address is not valid"
      : "";
  };

  return { isEmpty, minLength, isEmail };
}
