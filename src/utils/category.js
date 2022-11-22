import request from "./request";

const url = `/categories`;

export const create = (category) => {
  return request.post(url, category);
};

export const read = () => {
  return request.get(url + "?_embed=products");
};

export const update = (category) => {
  return request.put(`${url}/${category.id}`, category);
};

export const destroy = (id) => {
  return request.delete(`${url}/${id}`);
};

export const getOne = (id) => {
  return request.get(`${url}/${id}?_embed=products`);
};
