import "./EntryWrapper.css";

const EntryWrapper = (props) => {
  return (
    <div className="entry__wrapper">
      <div className="entry__container">{props.children}</div>
    </div>
  );
};

export default EntryWrapper;
