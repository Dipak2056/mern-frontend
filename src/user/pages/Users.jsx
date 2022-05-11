import React from "react";
import { UserList } from "../components/UserList";
export const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "dipak paudel",
      image:
        "https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-600w-788313199.jpg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};
