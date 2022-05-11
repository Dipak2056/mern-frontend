import React from "react";
import { useParams } from "react-router-dom";

import { PlaceList } from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "P1",
    title: "Empire state building",
    description: "one of the most famous sky craper",
    imageUrl:
      "https://image.shutterstock.com/image-photo/new-york-city-manhattan-downtown-600w-273724124.jpg",
    address: "20 w 34th St, new york, NY 10001",
    location: {
      lat: 40.784405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "P2",
    title: "Empire state building",
    description: "one of the most famous sky craper",
    imageUrl:
      "https://image.shutterstock.com/image-photo/new-york-city-manhattan-downtown-600w-273724124.jpg",
    address: "20 w 34th St, new york, NY 10001",
    location: {
      lat: 40.784405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];
export const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};
