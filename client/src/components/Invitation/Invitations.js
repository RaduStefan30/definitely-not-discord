import Invitation from "./Invitation";
import "./Invitations.css";

const Invitations = (props) => {
  const { invitations, accept, decline } = props;

  const friendInvitations = invitations.map((invitation, index) => {
    return (
      <Invitation
        key={invitation._id}
        invitation={invitation}
        accept={accept}
        decline={decline}
      />
    );
  });
  return friendInvitations;
};

export default Invitations;
