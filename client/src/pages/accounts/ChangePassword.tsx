import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountContainer from "../../components/AccountContainer";
import AccountButton from "../../components/AccountButton";
import AccountProfile from "../../components/AccountProfile";
import MyAlert from "../../components/MyAlert";
import { ChangePasswordData } from "../../dto/UserDTO";
import { changePassword } from "../../redux/reduxActions/UserActions";
import { RootState } from "../../redux/Store";
import { regExpPassword } from "../../validators/AuthValidator";
import AccountInput from "../../components/InlineInput";

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
  const { imageURL, username } = useSelector(
    (state: RootState) => state.auth.authenticatedUser
  );

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
      <AccountProfile imgUrl={imageURL} username={username} />
      <form onSubmit={handleSubmit}>
        <AccountInput
          onBlur={validatingOldPassword}
          error={errors.oldPassword}
          type="password"
          value={state.oldPassword}
          name="oldPassword"
          onChange={handleChange}
          size="big"
          label="Old Password"
        />
        <AccountInput
          error={errors.newPassword}
          onKeyUp={validatingNewPassword}
          type="password"
          value={state.newPassword}
          onChange={handleChange}
          size="big"
          label="New Password"
          name="newPassword"
        />
        <AccountInput
          error={errors.confirmedPassword}
          onKeyUp={validatingConfirmPassword}
          type="password"
          value={state.confirmedPassword}
          onChange={handleChange}
          size="big"
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
          size="big"
          text="Change Password"
        />
      </form>
      {messages.map((message) => (
        <MyAlert key={message.id} message={message.text} type={message.type} />
      ))}
    </AccountContainer>
  );
};

export default ChangePassword;
