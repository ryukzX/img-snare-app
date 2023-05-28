export default function useValidators() {
  const isEmpty = (fieldUsername, fieldValue) => {
    return !fieldValue ? "The " + fieldUsername + " field is required" : "";
  };

  const minLength = (fieldUsername, fieldValue, min) => {
    return fieldValue.length < min
      ? `The ${fieldUsername} field must be at least ${min} characters long`
      : "";
  };

  const isEmail = (fieldName, fieldValue) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(fieldValue)
      ? "The input is not a valid " + fieldName + " address"
      : "";
  };

  return { isEmpty, minLength, isEmail };
}
