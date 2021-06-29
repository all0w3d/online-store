import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { clearBasket } from "../http/basketApi";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const Basket = observer(() => {
  const { basket } = useContext(Context);

  return (
    <Container className="mt-5 p-5">
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
      <Row>
      <button
        type="button"
        className="btn btn-primary mt-5 m-1"
        onClick={() => {
          clearBasket()
          basket.clearBasket()
        }}
      >
        Очистить корзину
      </button>
      <button type="button" className="btn btn-success mt-5 m-1">
        Офрмить заказ
      </button>
      <NavLink to={SHOP_ROUTE} className=' mt-5 m-1'>
        <Button
          variant={"warning"}
        >
          На главную
        </Button>
      </NavLink>
      </Row>

      
    </Container>
  );
});

export default Basket;
