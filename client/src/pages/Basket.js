import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { clearBasket } from "../http/basketApi";
import { fetchBrands, fetchTypes } from "../http/deviceAPI";
import { Context } from "../index";

const Basket = observer(() => {
  const { basket } = useContext(Context);

  return (
    <Container className="mt-5">
      <Row>Ваши товары:</Row>
      {basket.devices.length !== 0 ? (
        basket.devices.map((dev) => {
         
          
          return (
            <div
              className="alert alert-secondary mt-3"
              role="alert"
              style={{ textDecoration: "underline" }}
              key={Math.random()}
            >
              {dev}
            </div>
          );
        })
      ) : (
        <div className="alert alert-danger mt-3" role="alert">
          Товары в корзине отсутствуют!
        </div>
      )}
      <Row className="mt-2 mb-2">
        Количество товаров: {basket.devices.length}
      </Row>
      <Row style={{ display: "flex", lineHeight: "20px" }}>
        <div style={{ marginTop: "3px", marginRight: "10px" }}>Общая цена:</div>{" "}
        &nbsp;
        <span style={{ textDecoration: "underline", fontSize: "20px" }}>
          {basket.price} грн.
        </span>
      </Row>
      <button
        type="button"
        className="btn btn-primary mt-5"
        onClick={() => {
          clearBasket()
          basket.clearBasket()
        }}
      >
        Очистить корзину
      </button>
      <button type="button" className="btn btn-success mt-5 ml-3">
        Офрмить заказ
      </button>
    </Container>
  );
});

export default Basket;
