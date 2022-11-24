import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@mui/material";
import { update, getOne } from "../../../utils/category";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./categoryEdit.module.scss";

const CategoryEdit = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCategory(id);
  }, [id]);

  const getCategory = async (id) => {
    const { data } = await getOne(id);
    setCategory(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await update({ ...data, id });
    navigate("/admin/categories");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
        <input
          className={styles.input}
          {...register("name", {
            required: true,
          })}
          defaultValue={category?.name}
          placeholder="Name"
        />
        {errors?.name?.type === "required" && <p>Name is required!</p>}

        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
    </div>
  );
};

export default CategoryEdit;
