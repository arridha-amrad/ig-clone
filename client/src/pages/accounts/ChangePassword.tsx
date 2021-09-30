import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountContainer from "../../components/accounts/container/AccountContainer";
import AccountButton from "../../components/accounts/form/button";
import AccountInput from "../../components/accounts/form/input";
import AccountLink from "../../components/accounts/form/link";
import AccountProfile from "../../components/accounts/profile/AccountProfile";
import MyAlert from "../../components/alert/MyAlert";
import { ChangePasswordData } from "../../dto/UserDTO";
import { changePassword } from "../../redux/reduxActions/UserActions";
import { RootState } from "../../redux/Store";
import { regExpPassword } from "../../validators/AuthValidator";

interface ChangePasswordProps {}

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  document.title = "Change Password";

  const [errors, setError] = useState({
    oldPassword: "",
    newPassword: "",
    confirmedPassword: "",
  });

  const [state, setState] = useState<
    ChangePasswordData & { confirmedPassword: string }
  >({
    newPassword: "",
    oldPassword: "",
    confirmedPassword: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const { messages } = useSelector((state: RootState) => state.message);

  const dispatch = useDispatch();

  const { newPassword, oldPassword, confirmedPassword } = state;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmedPassword) {
      setError({
        ...errors,
        confirmedPassword: "password not match",
      });
    } else {
      dispatch(changePassword({ newPassword, oldPassword }));
    }
  };

  const validatingOldPassword = () => {
    if (oldPassword.trim() === "") {
      setError({
        ...errors,
        oldPassword: "please input your current password",
      });
    } else {
      setError({
        ...errors,
        oldPassword: "",
      });
    }
  };

  const validatingNewPassword = () => {
    if (!newPassword.match(regExpPassword)) {
      setError({
        ...errors,
        newPassword:
          "Password requires 6 characters or more with lowercase, uppercase and number",
      });
    } else {
      setError({
        ...errors,
        newPassword: "",
      });
    }
  };

  const validatingConfirmPassword = () => {
    if (newPassword !== confirmedPassword) {
      setError({
        ...errors,
        confirmedPassword: "password not match",
      });
    } else {
      setError({
        ...errors,
        confirmedPassword: "",
      });
    }
  };

  useEffect(() => {
    messages.map(
      (msg) =>
        msg.type === "success" &&
        setState({
          newPassword: "",
          oldPassword: "",
          confirmedPassword: "",
        })
    );
  }, [messages]);

  return (
    <AccountContainer>
      <AccountProfile
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        username="squarepants"
      />
      <form onSubmit={handleSubmit}>
        <AccountInput
          onBlur={validatingOldPassword}
          error={errors.oldPassword}
          type="password"
          value={state.oldPassword}
          name="oldPassword"
          onChange={handleChange}
          inputSize="big"
          label="Old Password"
        />
        <AccountInput
          error={errors.newPassword}
          onKeyUp={validatingNewPassword}
          type="password"
          value={state.newPassword}
          onChange={handleChange}
          inputSize="big"
          label="New Password"
          name="newPassword"
        />
        <AccountInput
          error={errors.confirmedPassword}
          onKeyUp={validatingConfirmPassword}
          type="password"
          value={state.confirmedPassword}
          onChange={handleChange}
          inputSize="big"
          label="Confirm Password"
          name="confirmedPassword"
        />
        <AccountButton
          isDisabled={
            oldPassword.trim() === "" ||
            newPassword.trim() === "" ||
            confirmedPassword.trim() === "" ||
            errors.confirmedPassword !== "" ||
            errors.newPassword !== "" ||
            errors.oldPassword !== ""
          }
          btnSize="big"
          text="Change Password"
        />
      </form>
      {messages.map((message) => (
        <MyAlert key={message.id} message={message.text} type={message.type} />
      ))}
      <AccountLink link="/forgot-password" text="Forgot Password" />
    </AccountContainer>
  );
};

export default ChangePassword;
