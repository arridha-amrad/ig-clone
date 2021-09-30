import {
  ForgotPasswordData,
  LoginData,
  RegisterData,
  ResetPasswordData,
  VerifyEmailData,
} from "../dto/AuthDTO";

export interface IValidatorResult<T> {
  errors?: Partial<T>;
  valid: boolean;
}

export const NoValidator = (_: any): IValidatorResult<{}> => {
  const errors = {};
  return {
    errors,
    valid: true,
  };
};

export const regExpPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

export const regexpEmail =
  /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

export const regexpUsername =
  /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

export const regexpFullName =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

export type FieldsError<T> = Partial<Record<keyof T, string>>;

export const LoginValidator = (
  options: LoginData
): IValidatorResult<LoginData> => {
  const errors: Partial<Record<keyof LoginData, string>> = {};
  if (options.identity.trim() === "") {
    errors.identity = "please input username or password";
  } else {
    delete errors.identity;
  }
  if (options.password.trim() === "") {
    errors.password = "password is required";
  } else {
    delete errors.password;
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const ForgotPasswordValidator = (
  options: ForgotPasswordData
): IValidatorResult<ForgotPasswordData> => {
  const errors: Partial<Record<keyof ForgotPasswordData, string>> = {};
  if (options.email.trim() === "") {
    errors.email = "Please enter your email";
  } else {
    delete errors.email;
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const ResetPasswordValidator = (
  options: ResetPasswordData
): IValidatorResult<ResetPasswordData> => {
  const errors: Partial<Record<keyof ResetPasswordData, string>> = {};
  if (options.password !== options.confirmPassword) {
    errors.confirmPassword = "password not match";
  } else {
    delete errors.confirmPassword;
  }
  // else if (!options.password.match(regExp_password)) {
  //   errors.password =
  //     "password require at least 6 characters with combination uppercase, letter, and number";
  // }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const VerifyEmailValidator = (
  options: VerifyEmailData
): IValidatorResult<VerifyEmailData> => {
  const errors: Partial<Record<keyof VerifyEmailData, string>> = {};
  if (options.verificationCode.trim() === "") {
    errors.verificationCode = "enter your code";
  } else {
    delete errors.verificationCode;
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
