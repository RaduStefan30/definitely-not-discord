import "./EntryImage.css";

const EntryImage = (props) => {
  const { source } = props;

  return (
    <div
      className="entry__img-box"
      style={{ backgroundImage: `url(${source})` }}
    >
      EntryImage
    </div>
  );
};

export default EntryImage;
