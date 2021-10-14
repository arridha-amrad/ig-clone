import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppAndWebsites from "./pages/accounts/AppWebsite";
import ChangePassword from "./pages/accounts/ChangePassword";
import EditProfile from "./pages/accounts/EditProfile";
import EmailsFromInstagram from "./pages/accounts/EmailFromInstagram";
import EmailAndSMS from "./pages/accounts/EmailSMS";
import LoginActivity from "./pages/accounts/LoginActivity";
import ManageContact from "./pages/accounts/ManageContact";
import PrivacySecurity from "./pages/accounts/PrivacySecurity";
import PushNotifications from "./pages/accounts/PushNotification";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import { GlobalStyles } from "./styledComponents/global";
import UserTag from "./pages/user/UserTag";
import UserSaved from "./pages/user/UserSaved";
import UserIGTV from "./pages/user/UserIGTV";
import UserPost from "./pages/user/UserPosts";
import Home from "./pages/Home";
import axiosInstance, { axiosSource } from "./utils/AxiosInterceptors";
import { useDispatch } from "react-redux";
import { getLoginUserData } from "./redux/reduxActions/AuthActions";
import Loading from "./components/Loading";
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from "./redux/reduxTypes/AuthTypes";
import SecureRoute from "./components/SecureRoute";
import CreateNewPost from "./pages/CreateNewPost";

interface AppProps {}

const darkMode = {
  bg: "#1a1a1a",
};

const lightMode = {
  bg: "#fafafa",
};

const themes = {
  dark: darkMode,
  light: lightMode,
};

const App: React.FC<AppProps> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let mounted = true;
    if (localStorage.getItem("data") === "login") {
      setLoading(true);
      axiosInstance
        .get("/auth/refresh-token")
        .then(() => {
          if (mounted) {
            dispatch(getLoginUserData());
            dispatch({ type: SET_AUTHENTICATED });
          }
        })
        .catch((err: any) => {
          console.log(err.response);
          dispatch({ type: SET_UNAUTHENTICATED });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
    return function cleanup() {
      mounted = false;
    };
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes["light"]}>
          <GlobalStyles />
          <Switch>
            <Route exact path="/accounts/emailsignup" component={Register} />
            <Route exact path="/" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />

            <SecureRoute
              exact
              path="/create-new-post"
              component={CreateNewPost}
            />
            <SecureRoute exact path="/home" component={Home} />
            <SecureRoute exact path="/:username" component={UserPost} />
            <SecureRoute exact path="/:username/igtv" component={UserIGTV} />
            <SecureRoute exact path="/:username/saved" component={UserSaved} />
            <SecureRoute exact path="/:username/tagged" component={UserTag} />
            <SecureRoute exact path="/accounts/edit" component={EditProfile} />
            <SecureRoute
              exact
              path="/accounts/change-password"
              component={ChangePassword}
            />
            <SecureRoute
              exact
              path="/accounts/app-websites"
              component={AppAndWebsites}
            />
            <SecureRoute
              exact
              path="/accounts/email-sms"
              component={EmailAndSMS}
            />
            <SecureRoute
              exact
              path="/accounts/emails-from-instagram"
              component={EmailsFromInstagram}
            />
            <SecureRoute
              exact
              path="/accounts/login-activity"
              component={LoginActivity}
            />
            <SecureRoute
              exact
              path="/accounts/manage-contacts"
              component={ManageContact}
            />
            <SecureRoute
              exact
              path="/accounts/privacy-security"
              component={PrivacySecurity}
            />
            <SecureRoute
              exact
              path="/accounts/push-notifications"
              component={PushNotifications}
            />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
};

export default App;
