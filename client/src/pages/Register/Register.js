import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { register } from "../../store/authSlice";
import InputField from "../../components/InputField/InputField";
import { showAlert } from "../../store/alertSlice";
import Logo from "../../components/Logo/Logo";
import EntryWrapper from "../../components/Entry/EntryWrapper";
import EntryImage from "../../components/Entry/EntryImage";
import EntryButton from "../../components/Entry/EntryButton";
import EntryLink from "../../components/Entry/EntryLink";
import Alert from "../../components/Alert/Alert";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const displayAlert = useSelector((store) => store.alert.showAlert);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSuccess = () => {
    dispatch(
      showAlert({
        showAlert: true,
        alertType: "success",
        alertText: "Registered successfully",
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
        alertText: message || "Register failed",
      })
    );
  };
  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(register({ email, username, password }, onSuccess, onFail));
  };
  return (
    <EntryWrapper>
      <form className="login__form" onSubmit={(e) => handleRegister(e)}>
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
          value={username}
          setValue={setUsername}
          label="Username:"
          type="text"
          placeholder="radu123"
        />
        <InputField
          value={password}
          setValue={setPassword}
          label="Password:"
          type="password"
          placeholder="********"
        />
        <EntryButton text={"Register"} />
        <EntryLink
          text="Already have an account?"
          linkText="Log in"
          navigate="../login"
        />
      </form>
      <EntryImage source="register.svg" />
    </EntryWrapper>
  );
};

export default Register;
