import { Fragment } from "react";
import "./InputField.css";

const InputField = (props) => {
  const { value, setValue, label, type, placeholder } = props;
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Fragment>
      <label className="field__label">{label}</label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className="field__input"
      ></input>
    </Fragment>
  );
};

export default InputField;
