import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row, ListGroup } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex brand">
      <ListGroup.Item
        style={{ cursor: "pointer" }}
        className="brandbar"
        onClick={() => device.setSelectedBrand(device.brands)}
        active={device.brands.id === device.selectedBrand.id}
      >
        Все
      </ListGroup.Item>
      {device.brands.map((brand) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="brandbar"
          onClick={() => device.setSelectedBrand(brand)}
          active={brand.id === device.selectedBrand.id}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </Row>
  );
});

export default BrandBar;
