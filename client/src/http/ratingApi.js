import { $authHost, $host } from "./index";

export const findRating = async (device) => {
  const { data } = await $authHost.get("api/rating/", { params: { device } });
  return data;
};

export const addRating = async (rate, userId, deviceId) => {
  const { data } = await $authHost.post("api/rating/", {
    rate,
    userId,
    deviceId,
  });

  return data;
};

export const removeRating = async (user, device) => {
  const { data } = await $authHost.delete("api/rating/", {
    params: {
      user,
      device,
    },
  });

  return data;
};
