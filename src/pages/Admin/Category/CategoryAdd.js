import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@mui/material";
import { create } from "../../../utils/category";
import { useNavigate } from "react-router-dom";

import styles from "./categoryAdd.module.scss";
import toastr from "toastr";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    create(data).then(() => toastr.success("Add Success!"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
        <input
          className={styles.input}
          {...register("name", {
            required: true,
          })}
          placeholder="Name"
        />
        {errors?.name?.type === "required" && <p>Name is required!</p>}

        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default CategoryAdd;
