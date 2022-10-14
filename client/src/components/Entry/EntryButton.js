import "./EntryButton.css";

const EntryButton = (props) => {
  const { text } = props;
  return <button className="entry__button">{text}</button>;
};

export default EntryButton;
