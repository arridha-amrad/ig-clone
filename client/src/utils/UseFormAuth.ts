import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { FieldsError, IValidatorResult } from "../validators/AuthValidator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const UseFormAuth = <T>(
  callback: (state: T) => void,
  initialState: T,
  validator: (state: T) => IValidatorResult<T>,
  optional?: any
) => {
  const [states, setState] = useState<T>(initialState);
  const [errors, setErrors] = useState<FieldsError<T>>({});
  const dispatch = useDispatch();
  const { loadingAuth, requestStatus } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (requestStatus) {
      setState(initialState);
    } else {
      setState({ ...states });
    }
    // eslint-disable-next-line
  }, [requestStatus]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { valid, errors: validatorErrors } = validator(states);

    if (!valid) {
      setErrors({
        ...validatorErrors,
      });
    } else {
      setErrors({});
      if (optional) {
        optional();
      }
      dispatch(callback(states));
    }
  };
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    event.persist();
    setState({
      ...states,
      [event.target.name]: event.target.value,
    });
  };

  return {
    handleSubmit,
    handleChange,
    loadingAuth,
    states,
    setState,
    errors,
  };
};

export default UseFormAuth;
