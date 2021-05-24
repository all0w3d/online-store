import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device, brands }) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card
        style={{
          boxSizing: "border-box",
          width: "150px",

          cursor: "pointer",
          padding: "10px",
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
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
