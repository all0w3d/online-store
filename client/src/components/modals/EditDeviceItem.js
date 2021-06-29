import React, { Fragment, useState } from "react";
import { Button, FormControl, Image, InputGroup } from "react-bootstrap";
import { updateDevice } from "../../http/deviceAPI";

const EditDeviceItem = ({ name, price, img, id }) => {
  const [change, setChange] = useState(false);
  const [nameValue, setnameValue] = useState(name);
  const [priceValue, setpriceValue] = useState(price);
  const [editingId, setEditingId] = useState();
  return (
    <div className="m-2 mt-4 edit__modal-item">
      <Image
        style={{ height: "50px", marginRight: "20px" }}
        src={process.env.REACT_APP_API_URL + img}
      ></Image>
      <div><strong>Название:</strong> {name} </div>
      <div><strong>Цена:</strong> {price} </div>
      {change ? (
        <div className="mt-1">
          <InputGroup className="mt-2">
            <FormControl
              placeholder="new name"
              value={nameValue}
              onChange={(e) => {
                setnameValue(e.target.value);
              }}
            />

            <FormControl
              placeholder="new price"
              value={priceValue}
              onChange={(e) => {
                setpriceValue(e.target.value);
              }}
            />
          </InputGroup>
          <Button
            onClick={() => {
              setChange(!change);
              updateDevice(editingId, nameValue, priceValue);
            }}
            className="ml-2 mt-2"
            variant="success"
          >
            Сохранить
          </Button>
        </div>
      ) : (
        <div className="mt-1">
          {" "}
          <Button
            onClick={() => {
              setChange(!change);
              setEditingId(id);
            }}
            className="ml-2"
          >
            Изменить
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditDeviceItem;
