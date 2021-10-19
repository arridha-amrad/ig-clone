import { VerifyEmailData } from "../dto/AuthDTO";
import { verifyEmail } from "../redux/reduxActions/AuthActions";
import { Button } from "../styledComponents/button-el";
import { VSpacer } from "../styledComponents/spacer-el";
import UseFormAuth from "../utils/UseFormAuth";
import { VerifyEmailValidator } from "../validators/AuthValidator";
import AuthInput from "./AuthInput";
import { AuthTitle } from "./AuthPage";
import EnvelopeIcon from "../icons/email.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import MyAlert from "./MyAlert";

interface EmailVerificationProps {}

const EmailVerification: React.FC<EmailVerificationProps> = () => {
   const [email, setEmail] = useState("");

   const { errors, loadingAuth, handleChange, handleSubmit, states, setState } =
      UseFormAuth<VerifyEmailData>(
         verifyEmail,
         {
            verificationCode: "",
            email: "",
         },
         VerifyEmailValidator
      );

   const { messages } = useSelector((state: RootState) => state.message);

   const { verificationCode } = states;

   useEffect(() => {
      if (localStorage.getItem(process.env.REACT_APP_LS_KEY_EMAIL ?? "")) {
         const data = localStorage.getItem(
            process.env.REACT_APP_LS_KEY_EMAIL ?? ""
         );
         if (data) {
            setEmail(data);
            setState({
               ...states,
               email: data,
            });
         }
      }
      // eslint-disable-next-line
   }, []);

   return (
      <>
         <AuthTitle>
            <img src={EnvelopeIcon} alt="envelope" />
            <p className="title">Enter Confirmation Code</p>
            <p className="info">
               Enter the confirmation code we sent to {email}.
               <span>&nbsp;Resend Code.</span>
            </p>
         </AuthTitle>
         <VSpacer aa_length="20px" />

         <form onSubmit={handleSubmit}>
            <AuthInput
               handleChange={handleChange}
               label="verification code"
               name="verificationCode"
               type="text"
               value={verificationCode}
               error={errors?.verificationCode}
            />
            <VSpacer aa_length="15px" />
            <Button
               disabled={verificationCode === "" || loadingAuth}
               type="submit"
               aa_isFullWidth
            >
               {loadingAuth ? "loading..." : "Next"}
            </Button>
         </form>
         {messages.length > 0 ? (
            messages.map((message) => (
               <MyAlert
                  key={message.id}
                  message={message.text}
                  type={message.type}
               />
            ))
         ) : (
            <VSpacer aa_length="30px" />
         )}
      </>
   );
};

export default EmailVerification;
