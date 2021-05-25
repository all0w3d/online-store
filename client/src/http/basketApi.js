import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchBaskets = async () => {
    const {data} = await $host.get('api/basket')
    return data
};
