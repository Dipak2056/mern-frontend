import React from "react";

import { UserItem } from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UserList.css";

export const UserList = (props) => {
  if (props.items.length < 1) {
    return (
      <div className="center">
        <Card>
          <h2>No User Found.</h2>
        </Card>
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
