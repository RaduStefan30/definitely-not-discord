import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { sendFriendInvitation } from "../../store/friendsSlice";
import EntryButton from "../Entry/EntryButton";
import InputField from "../InputField/InputField";
import "./Modal.css";

const Modal = (props) => {
  const dispatch = useDispatch();

  const { closeModal } = props;

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendFriendInvitation({ email }));
    setEmail("");
  };

  return (
    <Fragment>
      <div className="overlay" onClick={closeModal}>
        &nbsp;
      </div>
      <form className="modal" onSubmit={(e) => handleSubmit(e)}>
        <button className="modal__close" type="button" onClick={closeModal}>
          &times;
        </button>
        <p className="modal__text">
          Enter the email address of the friend you want to add:
        </p>
        <InputField
          value={email}
          setValue={setEmail}
          label=""
          type="text"
          placeholder="radu@test.com"
        />
        <EntryButton text={"Send invite"} />
      </form>
    </Fragment>
  );
};

export default Modal;
