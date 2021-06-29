import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import Rating from "react-rating";
import star from "../assets/star.png";
import starActive from "../assets/staractive.png";
import { findRating } from "../http/ratingApi";

const DeviceItem = ({ device, brands }) => {
  const [recievedRating, SetRecivedRating] = useState();

  const history = useHistory();
  useEffect(() => {
    findRating(device.id).then((data) => {
      let rateArr = [];
      data.forEach((i) => {
        rateArr.push(i.rate);
      });
      const averageRate = (
        rateArr.reduce((sume, el) => sume + el, 0) / rateArr.length
      ).toFixed(1);

      SetRecivedRating(averageRate);
    });
  }, []);

  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card
        className="deviceitem"
        style={{
          boxSizing: "border-box",
          
          cursor: "pointer",
          padding: "20px",
        }}
        border="1px"
      >
        <div style={{ minHeight: "140px", display: "flex" }}>
          <Image
            style={{
              width: "auto",
              maxWidth: "120px",
              maxHeight: "120px",
              display: "flex",
              margin: "auto",
            }}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </div>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{brands[device.brandId]}</div>

          <div className="d-flex align-items-center">
            <div style={{ marginTop: "5px", marginRight: "3px" }}>
              {isNaN(recievedRating) ? 0 : recievedRating}
            </div>
            <Rating
              emptySymbol={
                <img src={star} className="icon mr-1" width="20px" alt="" />
              }
              fullSymbol={
                <img src={starActive} className="icon" width="20px" alt="" />
              }
              readonly
              stop={1}
              initialRating={recievedRating}
            />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
