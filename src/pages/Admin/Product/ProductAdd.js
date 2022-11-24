import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@mui/material";

import { read } from "../../../utils/category";
import { create } from "../../../utils/product";

import styles from "./productAdd.module.scss";
import toastr from "toastr";

const ProductAdd = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await read();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await create(data);
    toastr.success("Add Product Success!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
        <select
          className={styles.category}
          {...register("categoryId", {
            required: true,
          })}
        >
          <option value="">-- Category --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && <p>Category is required!</p>}

        <input
          className={styles.input}
          {...register("name", {
            required: true,
          })}
          placeholder="Name"
        />
        {errors?.name?.type === "required" && <p>Name is required!</p>}

        <input
          className={styles.input}
          {...register("image", {
            required: true,
          })}
          placeholder="URL Image"
        />
        {errors?.image?.type === "required" && <p>Image is required!</p>}

        <input
          className={styles.input}
          {...register("price", {
            required: true,
          })}
          placeholder="Price"
        />
        {errors?.price?.type === "required" && <p>Price is required!</p>}

        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default ProductAdd;
