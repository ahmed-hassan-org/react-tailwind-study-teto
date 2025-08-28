import React from "react";

type Props = {
  userId?: string;
  username?: string;
  email?: string;
};

const UserCard = (props: Props) => {
  return (
    <div>
      <h1>UserId: {props.userId}</h1>
      <h1>Username: {props.username}</h1>
      <h1>Email: {props.email}</h1>
    </div>
  );
};

export default UserCard;
