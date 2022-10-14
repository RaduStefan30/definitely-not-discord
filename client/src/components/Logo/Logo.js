import "./Logo.css";

const Logo = (props) => {
  const { classes } = props;
  return (
    <img
      src="logo-no-background.svg"
      alt="logo"
      className={`logo ${classes}`}
    />
  );
};

export default Logo;
