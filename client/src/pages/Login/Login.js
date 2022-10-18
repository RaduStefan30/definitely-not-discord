import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { login } from "../../store/authSlice";
import { showAlert } from "../../store/alertSlice";
import InputField from "../../components/InputField/InputField";
import Logo from "../../components/Logo/Logo";
import EntryButton from "../../components/Entry/EntryButton";
import EntryLink from "../../components/Entry/EntryLink";
import EntryImage from "../../components/Entry/EntryImage";
import EntryWrapper from "../../components/Entry/EntryWrapper";
import Alert from "../../components/Alert/Alert";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const displayAlert = useSelector((store) => store.alert.showAlert);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSuccess = () => {
    dispatch(
      showAlert({
        showAlert: true,
        alertType: "success",
        alertText: "Logged in successfully",
      })
    );
    setTimeout(() => {
      navigate("../dashboard");
    }, 600);
  };

  const onFail = (message) => {
    dispatch(
      showAlert({
        showAlert: true,
        alertType: "danger",
        alertText: message || "Login failed",
      })
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, onSuccess, onFail));
  };

  return (
    <EntryWrapper>
      <form className="login__form" onSubmit={(e) => handleLogin(e)}>
        <Logo classes="logo--big" />
        {displayAlert && <Alert />}
        <InputField
          value={email}
          setValue={setEmail}
          label="Email:"
          type="text"
          placeholder="radu@test.com"
        />
        <InputField
          value={password}
          setValue={setPassword}
          label="Password:"
          type="password"
          placeholder="********"
        />
        <EntryButton text={"Log in"} />
        <EntryLink
          text="Don't have an account?"
          linkText="Register"
          navigate="../register"
        />
      </form>
      <EntryImage source="login.svg" />
    </EntryWrapper>
  );
};

export default Login;
