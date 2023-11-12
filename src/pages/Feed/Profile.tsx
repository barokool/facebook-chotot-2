import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();

  return <div>User Profile</div>;
};

export default Profile;
