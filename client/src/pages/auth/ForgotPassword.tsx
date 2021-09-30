import { AuthOrText, OrText } from "../../components/auth/auth.elements";
import { Button } from "../../styledComponents/button-el";
import { VSpacer } from "../../styledComponents/spacer-el";
import PadLock from "../../icons/padlock.svg";
import { MyLinkTwo } from "../../styledComponents/link-el";
import AuthInput from "../../components/auth/input/AuthInput";
import AuthPageTwo from "../../components/AuthPageTwo";
import UseFormAuth from "../../utils/UseFormAuth";
import { ForgotPasswordData } from "../../dto/AuthDTO";
import { forgotPassword } from "../../redux/reduxActions/AuthActions";
import { ForgotPasswordValidator } from "../../validators/AuthValidator";

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const { errors, handleChange, handleSubmit, loadingAuth, states } =
    UseFormAuth<ForgotPasswordData>(
      forgotPassword,
      {
        email: "",
      },
      ForgotPasswordValidator
    );

  const { email } = states;

  return (
    <AuthPageTwo>
      <img alt="padlock" src={PadLock} />
      <h4>Trouble Logging In</h4>
      <p>
        Enter your email, phone, or username and we'll send you a link to get
        back into your account.
      </p>
      <VSpacer aa_length="20px" />
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="email"
          name="email"
          type="text"
          handleChange={handleChange}
          value={email}
          error={errors?.email}
        />
        <VSpacer aa_length="20px" />
        <Button disabled={email === "" || loadingAuth} aa_isFullWidth>
          Send Login Link
        </Button>
      </form>
      <VSpacer aa_length="30px" />
      <AuthOrText>
        <OrText>OR</OrText>
      </AuthOrText>
      <VSpacer aa_length="30px" />
      <MyLinkTwo to="/register">Create New Account</MyLinkTwo>
      <VSpacer aa_length="40px" />
    </AuthPageTwo>
  );
};

export default ForgotPassword;
