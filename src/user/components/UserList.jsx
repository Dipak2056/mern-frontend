import React from "react";
import "./UserList.css";
import { UserItem } from "./UserItem";
export const UserList = (props) => {
  if (props.items.length < 1) {
    return (
      <div className="center">
        <h2>No User Found.</h2>
      </div>
    );
  }
  return (
    <ul className="usersList">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};
