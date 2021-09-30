import { useState } from "react";
import AuthPage from "../../components/AuthPage";
import RegisterForm from "../../components/RegistrationForm";
import EmailVerification from "../../components/EmailVerificationForm";
import BirthDayForm from "../../components/BirthDayForm";
import { RegisterData } from "../../dto/AuthDTO";
import { ChangeEvent, FormEvent, useEffect } from "react";
import axiosInstance from "../../utils/AxiosInterceptors";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { useHistory } from "react-router";

export interface BirthDayState {
  month: string;
  date: string;
  year: string;
}

const Register = () => {
  const steps = ["register", "setBirthDay", "emailVerification"];
  const [currentStep, setCurrentStep] = useState(0);
  const goToNextStep = () => setCurrentStep((val) => val + 1);

  const [loading, setLoading] = useState(false);

  const [states, setState] = useState<RegisterData>({
    email: "",
    username: "",
    fullName: "",
    password: "",
    birthDay: "",
  });

  const [birthDayState, setBirthDayState] = useState<BirthDayState>({
    month: "",
    date: "",
    year: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setState({
      ...states,
      [e.target.name]: e.target.value,
    });
    setBirthDayState({
      ...birthDayState,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegistrationData = async (e: FormEvent) => {
    e.preventDefault();
    const { date, month, year } = birthDayState;
    try {
      setLoading(true);
      const res = await axiosInstance.post("/auth/register", {
        ...states,
        birthDay: `${date} ${month} ${year}`,
      });
      if (res.status === 201) {
        goToNextStep();
        localStorage.setItem(
          process.env.REACT_APP_LS_KEY_STEP ?? "",
          JSON.stringify({ step: 2 })
        );
        localStorage.removeItem(process.env.REACT_APP_LS_KEY_REG_DATA ?? "");
        localStorage.setItem(
          process.env.REACT_APP_LS_KEY_EMAIL ?? "",
          states.email
        );
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LS_KEY_REG_DATA ?? "")) {
      const data = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LS_KEY_REG_DATA ?? "") ?? ""
      ) as RegisterData;
      setState({
        ...states,
        birthDay: data.birthDay,
        email: data.email,
        fullName: data.fullName,
        password: data.password,
        username: data.username,
      });
      console.log("data : ", data);
    }
    if (localStorage.getItem(process.env.REACT_APP_LS_KEY_STEP ?? "")) {
      const data = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LS_KEY_STEP ?? "") ?? ""
      );
      setCurrentStep(data.step);
    }
    // eslint-disable-next-line
  }, []);

  const { isRedirectToLoginPage } = useSelector(
    (state: RootState) => state.auth
  );
  const history = useHistory();

  useEffect(() => {
    if (isRedirectToLoginPage) {
      history.push("/");
      localStorage.clear();
    }
    // eslint-disable-next-line
  }, [isRedirectToLoginPage]);

  return (
    <AuthPage
      link="login"
      question="Have an account ?"
      url="/"
      steps={steps}
      isWithCarousel={false}
    >
      {steps[currentStep] === "emailVerification" ? (
        <EmailVerification />
      ) : steps[currentStep] === "register" ? (
        <RegisterForm
          handleChange={handleChange}
          states={states}
          goToNextStep={goToNextStep}
        />
      ) : (
        <BirthDayForm
          isLoading={loading}
          handleChange={handleChange}
          handleSubmit={submitRegistrationData}
          data={birthDayState}
        />
      )}
    </AuthPage>
  );
};

export default Register;
