import requests from "./request";

const url = `/products`;

export const getListProducts = () => {
  return requests.get(url);
};

export const getProduct = (id) => {
  return requests.get(`${url}/${id}`);
};

export const searchProduct = (keyword) => {
  return requests.get(`${url}?name_like=${keyword}`);
};
