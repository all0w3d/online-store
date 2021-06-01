import React, { Fragment, useState } from "react";
import { Button, FormControl, Image, InputGroup } from "react-bootstrap";

const EditDeviceItem = ({ name, price, img }) => {
  const [change, setChange] = useState(false);
  const [nameValue, setnameValue] = useState(name);
  const [priceValue, setpriceValue] = useState(price);
  return (
    <div className="m-2 mt-4">
      <Image
        style={{ height: "50px", marginRight: "20px" }}
        src={process.env.REACT_APP_API_URL + img}
      ></Image>
      {name} {price}
      {change ? (
        <Fragment className="mt-1">
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
            }}
            className="ml-2 mt-2"
            variant="success"
          >
            Сохранить
          </Button>
        </Fragment>
      ) : (
        <Fragment className="mt-1">
          {" "}
          <Button onClick={() => setChange(!change)} className="ml-2">
            Изменить
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default EditDeviceItem;
