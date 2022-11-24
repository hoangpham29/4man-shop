import requests from "./request";

const url = `/products`;

export const getListProducts = () => {
  return requests.get(`${url}?_expand=category`);
};

export const getProduct = (id) => {
  return requests.get(`${url}/${id}`);
};

export const searchProduct = (keyword) => {
  return requests.get(`${url}?name_like=${keyword}`);
};

export const create = (product) => {
  return requests.post(url, product);
};

export const update = (product) => {
  return requests.put(`${url}/${product.id}`, product);
};

export const destroy = (id) => {
  return requests.delete(`${url}/${id}`);
};

export const show = (id) => {
  return requests.get(`${url}/${id}?_expand=category`);
};
