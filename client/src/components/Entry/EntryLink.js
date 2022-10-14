import { Link } from "react-router-dom";
import "./EntryLink.css";

const EntryLink = (props) => {
  const { text, linkText, navigate } = props;
  return (
    <span className="entry-text">
      {text} <Link to={navigate}>{linkText}</Link>
    </span>
  );
};

export default EntryLink;
