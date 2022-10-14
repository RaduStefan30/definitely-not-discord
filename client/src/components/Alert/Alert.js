import { useSelector } from "react-redux";
import "./Alert.css";

const Alert = () => {
  const { alertType, alertText } = useSelector((state) => state.alert);
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
