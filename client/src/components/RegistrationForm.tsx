import AuthInput from "./auth/input/AuthInput";
import { RegisterData } from "../dto/AuthDTO";
import { Button } from "../styledComponents/button-el";
import { VSpacer } from "../styledComponents/spacer-el";
import {
  regexpEmail,
  regexpFullName,
  regExpPassword,
  regexpUsername,
} from "../validators/AuthValidator";
import { AuthTitle } from "./AuthPage";
import InstagramText from "../images/ig2.svg";
import FacebookButton from "./auth/FacebookButton";
import { FC, useState } from "react";
import styled from "styled-components";
import axiosInstance from "../utils/AxiosInterceptors";
import { ChangeEvent, FormEvent } from "react";
import OrDivider from "./ORDivider";

interface RegisterFormProps {
  goToNextStep: () => void;
  states: RegisterData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface ErrorMessage {
  errEmail: string;
  errFullName: string;
  errUsername: string;
  errPassword: string;
}

const RegisterForm: FC<RegisterFormProps> = ({
  goToNextStep,
  handleChange,
  states,
}) => {
  const [errors, setError] = useState<Partial<RegisterData & ErrorMessage>>();
  const [message, setMessage] = useState("");

  const validatingEmail = () => {
    if (!states.email.match(regexpEmail)) {
      setError({
        ...errors,
        email: "not-available",
        errEmail: "Email address is not valid",
      });
    } else {
      setError({
        ...errors,
        email: "available",
        errEmail: "",
      });
    }
  };
  const validatingFullName = () => {
    if (!states.fullName.match(regexpFullName)) {
      setError({
        ...errors,
        fullName: "not-available",
        errFullName: "Full name is not valid",
      });
    } else {
      setError({
        ...errors,
        fullName: "available",
        errFullName: "",
      });
    }
  };
  const validatingUsername = () => {
    if (!states.username.match(regexpUsername)) {
      setError({
        ...errors,
        username: "not-available",
        errUsername: "Username is not valid",
      });
    } else {
      setError({
        ...errors,
        username: "available",
        errUsername: "",
      });
    }
  };
  const validatingPassword = () => {
    if (!states.password.match(regExpPassword)) {
      setError({
        ...errors,
        password: "not-available",
        errPassword:
          "Password requires 6 characters or more with lowercase, uppercase and number",
      });
    } else {
      setError({
        ...errors,
        password: "available",
        errPassword: "",
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      errors?.errEmail === "" ||
      errors?.errFullName === "" ||
      errors?.errPassword === "" ||
      errors?.errUsername === ""
    ) {
      try {
        const resEmail = await axiosInstance.post("/auth/is-exists", {
          data: states.email,
        });
        console.log("res email data : ", resEmail.data);

        const resUsername = await axiosInstance.post("/auth/is-exists", {
          data: states.username,
        });
        if (resEmail.data !== "ok") {
          setMessage("Email has been registered");
          setError({
            ...errors,
            email: "not-available",
          });
        } else if (resUsername.data !== "ok") {
          setMessage("Username has been registered");
          setError({
            ...errors,
            username: "not-available",
          });
        } else {
          setMessage("");
          localStorage.setItem(
            process.env.REACT_APP_LS_KEY_REG_DATA ?? "",
            JSON.stringify({ ...states })
          );
          goToNextStep();
          localStorage.setItem(
            process.env.REACT_APP_LS_KEY_STEP ?? "",
            JSON.stringify({ step: 1 })
          );
        }
      } catch (error) {
        setMessage("Server Error");
      }
    }
  };

  return (
    <>
      <AuthTitle>
        <img src={InstagramText} alt="instagram text" />
      </AuthTitle>
      <Text>Sign up to see photos and videos from your friends.</Text>
      <FacebookButton isRegisterPage={true} />
      <OrDivider />
      <form onSubmit={handleSubmit}>
        <AuthInput
          autoComplete="off"
          isWithValidation={true}
          validationResult={errors?.email}
          label="Email"
          name="email"
          value={states.email}
          handleChange={handleChange}
          type="text"
          error={errors?.errEmail}
          onBlur={validatingEmail}
        />
        <VSpacer aa_length="8px" />
        <AuthInput
          autoComplete="off"
          validationResult={errors?.fullName}
          isWithValidation={true}
          label="Full Name"
          name="fullName"
          value={states.fullName}
          handleChange={handleChange}
          type="text"
          error={errors?.errFullName}
          onBlur={validatingFullName}
        />
        <VSpacer aa_length="8px" />
        <AuthInput
          autoComplete="off"
          isWithValidation={true}
          validationResult={errors?.username}
          label="Username"
          name="username"
          value={states.username}
          handleChange={handleChange}
          type="text"
          error={errors?.errUsername}
          onBlur={validatingUsername}
        />
        <VSpacer aa_length="8px" />
        <AuthInput
          autoComplete="off"
          isWithValidation={true}
          validationResult={errors?.password}
          label="Password"
          name="password"
          value={states.password}
          handleChange={handleChange}
          type="password"
          error={errors?.errPassword}
          onKeyUp={validatingPassword}
        />
        <VSpacer aa_length="15px" />
        <Button
          disabled={
            states.username === "" ||
            states.email === "" ||
            states.password === "" ||
            errors?.errEmail !== "" ||
            errors?.errFullName !== "" ||
            errors?.errPassword !== "" ||
            errors?.errUsername !== ""
          }
          aa_isFullWidth
          type="submit"
        >
          Sign Up
        </Button>
        {<ErrorText>{message}</ErrorText>}
      </form>
      <SmallText>
        By signing up, you agree to our <span>Terms</span> ,{" "}
        <span>Data Policy</span> and <span>Cookies Policy</span> .
      </SmallText>
      <VSpacer aa_length="15px" />
    </>
  );
};

export default RegisterForm;

const ErrorText = styled.p`
  text-align: center;
  color: var(--red);
  margin: 10px 0;
`;

const Text = styled.p`
  text-align: center;
  color: var(--grey);
  font-size: 1.1rem;
  font-weight: 500;
`;

const SmallText = styled.small`
  text-align: center;
  color: var(--grey);
  font-size: 12px;
  margin: 20px 0 25px;

  span {
    font-weight: 600;
  }
`;
