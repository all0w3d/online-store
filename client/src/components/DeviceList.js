import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  let brandsObj = {};

  device.brands.forEach((brand) => {
    return (brandsObj[brand.id] = brand.name);
  });

  const deviceArr = device.devices.slice();

  

  return (
    <Row className="d-flex">
      {deviceArr
        
        .map((device) => (
          <DeviceItem key={device.id} device={device} brands={brandsObj} />
        ))}
    </Row>
  );
});

export default DeviceList;
