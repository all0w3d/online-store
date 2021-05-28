import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { Button, Image } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import { exit } from "../http/userAPI";
import logo from "../assets/logo.png";
const NavBar = observer(() => {
  const { user, basket } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setIsAdmin(false);
    exit();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white", cursor: "pointer" }} to={SHOP_ROUTE}>
          <Image
            src={logo}
            style={{ height: "40px", margin: "0 15px 0 0" }}
          ></Image>
          Интерент Магазин
        </NavLink>

        <div>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              {user.isAdmin ? (
                <Button
                  variant={"outline-light"}
                  onClick={() => history.push(ADMIN_ROUTE)}
                >
                  Админ панель
                </Button>
              ) : null}

              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                className="ml-2"
              >
                Выйти
              </Button>

              <Button
                variant={"outline-light"}
                onClick={() => history.push(BASKET_ROUTE)}
                className="ml-2"
              >
                Корзина{" "}
                <span className="badge bg-primary">
                  {basket.devices.length ? basket.devices.length : null}
                </span>
                <span className="visually-hidden"></span>
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(LOGIN_ROUTE)}
              >
                Авторизация
              </Button>
            </Nav>
          )}
        </div>
      </Container>
    </Navbar>
  );
});

export default NavBar;
