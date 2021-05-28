import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import { fetchBaskets, fetchBasketsDevices } from "./http/basketApi";
import { fetchBrands, fetchOneDevice } from "./http/deviceAPI";

const App = observer(() => {
  const { user, basket } = useContext(Context);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
        user.setIsAdmin(data.role === "ADMIN");
        user.setUserId(data.id);
        fetchBaskets().then((data) => {
          data.forEach((i) => {
            if (i.userId === user.userId) {
              basket.setId(i.id);
            }
          });
        });
      })
      .then(() => {
        fetchBasketsDevices().then((data) => {
          basket.clearBasket();
          data.forEach((data) => {
            if (data.basketId === basket.id) {
              fetchOneDevice(data.deviceId).then((data) => {
                basket.setPrice(data.price);

                fetchBrands().then((datar) => {
                  datar.forEach((i) => {
                    if (i.id === data.brandId) {
                      basket.setDevices(i.name + ` ${data.name}`);
                    }
                  });
                });
              });
            }
          });
        });
      })
      .finally(() => {
        user.setLoading(false);
      });
  }, []);

  if (user.isLoading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <NavBar />

      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
