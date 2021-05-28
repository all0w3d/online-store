import { $authHost, $host } from "./index";

export const fetchBaskets = async () => {
  const { data } = await $authHost.get("api/basket/");
  return data;
};

export const fetchBasketsDevices = async () => {
  const { data } = await $authHost.get("api/basket_devices/");
  return data;
};

export const addDeviceToBasket = async (device) => {
    const { data } = await $authHost.post('api/basket_devices/', device)
    return data;
}


export const clearBasket = async () => {
  const { data } = await $authHost.delete('api/basket_devices/')
  return data;
} 

