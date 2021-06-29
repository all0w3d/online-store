import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";

import star from "../assets/star.png";
import starActive from "../assets/staractive.png";
import { Link, NavLink, useParams } from "react-router-dom";
import { fetchOneDevice, fetchBrands } from "../http/deviceAPI";
import { Context } from "../index";
import { SHOP_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { addDeviceToBasket } from "../http/basketApi";
import Rating from "react-rating";
import { addRating, findRating, removeRating } from "../http/ratingApi";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const [brand, setBrand] = useState();
  const [rating, setRating] = useState();
  const [rated, setRated] = useState(false);
  const [recievedRating, setRecievedRating] = useState();
  const { id } = useParams();
  const { user, basket } = useContext(Context);

  useEffect(() => {
    fetchOneDevice(id).then((device) => {
      setDevice(device);
      fetchBrands().then((data) => {
        data.forEach((brand) => {
          if (brand.id === device.brandId) {
            setBrand(brand.name);
          }
        });
      });
    });
  }, []);

  useEffect(() => {
    findRating(device.id).then((data) => {
      let rateArr = [];
      data.forEach((i) => {
        rateArr.push(i.rate);
        if (i.userId === user.userId) {
          setRated(true);
        }
      });
      const averageRate = (
        rateArr.reduce((sume, el) => sume + el, 0) / rateArr.length
      ).toFixed(1);

      setRecievedRating(averageRate);
    });
  }, [device]);

  return (
    <Container className="mt-3">
      <NavLink to={SHOP_ROUTE}>
        <button type="button" className="btn btn-primary mb-3">
          Вернуться назад
        </button>
      </NavLink>

      <Row>
        <Col md={4} style={{ display: "flex", alignItems: "center" }}>
          {device.img ? (
            <Image
              src={process.env.REACT_APP_API_URL + device.img}
              style={{ maxWidth: "300px" }}
            />
          ) : (
            <Spinner
              style={{ margin: "auto" }}
              animation={"border"}
              variant="primary"
            />
          )}
        </Col>

        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>
              {brand} {device.name}
            </h2>

            <div className="d-flex flex-column align-items-center justify-content-center m-3">
              <Rating
                onChange={(e) => {
                  setRating(e);
                }}
                className="mt-5 mb-4"
                emptySymbol={
                  <img src={star} className="icon mr-1" width="40px" alt="" />
                }
                fullSymbol={
                  <img src={starActive} className="icon" width="40px" alt="" />
                }
                initialRating={rating || recievedRating}
                readonly={rated || !user.isAuth}
              />

              {user.isAuth ? (
                rated ? (
                  <Button
                    onClick={() => {
                      setRated(false);
                      removeRating(user.userId, device.id);
                    }}
                  >
                    Переголосовать
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      if (rating) {
                        addRating(rating, user.userId, device.id);
                        setRated(true);
                      } else {
                        alert("Ошибка, укажите рейтинг");
                      }
                    }}
                  >
                    Оценить
                  </Button>
                )
              ) : (
                <div>Авторизируйтесь чтобы оценить</div>
              )}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>Цена: {device.price} грн.</h3>

            {user.isAuth ? (
              <Button
                variant={"outline-dark"}
                onClick={() => {
                  basket.setDevices(`${brand} ${device.name}`);
                  basket.setPrice(device.price);
                  addDeviceToBasket({
                    basketId: basket.id,
                    deviceId: id,
                  });
                }}
              >
                Добавить в корзину
              </Button>
            ) : (
              <Link to={LOGIN_ROUTE}>
                {" "}
                <Button variant={"outline-dark"}>Добавить в корзину</Button>
              </Link>
            )}
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
