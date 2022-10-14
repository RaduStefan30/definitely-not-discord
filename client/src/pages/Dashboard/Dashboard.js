import { useSelector } from "react-redux";

const Dashboard = () => {
  const userDetails = useSelector((state) => state.auth.userData);
  console.log(userDetails);

  return <div>{userDetails && userDetails.username}</div>;
};

export default Dashboard;
