import React, { useState } from "react";
import "./PlaceItem.css";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import { Modal } from "../../shared/components/UIElements/Modal";

export const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };
  return (
    <>
      {showMap && (
        <Modal
          show={showMap}
          onCancel={closeMapHandler}
          header={props.address}
          contentClass="place-item__modal-content"
          footerClass="place-item__modal-actions"
          footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
          <div className="map-container">
            <h2>the map</h2>
          </div>
        </Modal>
      )}

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              View On Map
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};
