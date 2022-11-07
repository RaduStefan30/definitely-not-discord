import "./EntryButton.css";

const EntryButton = (props) => {
  const { text, type, onClick } = props;
  return (
    <button className="entry__button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default EntryButton;
