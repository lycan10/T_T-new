import { STRAPI_SERVER } from "../functions/strapi";
import useFetch from "./useFetch";

export const useStrapi = (content, parameters = { populate: "*" }) => {
  let params = "";

  const keys = Object.keys(parameters);

  keys.forEach((key, i) => {
    params += `${i ? "&" : "?"}${key}=${parameters[key]}`;
  });

  const result = useFetch(`${STRAPI_SERVER}/api/${content}${params}`);
  return result;
};
