import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import styles from "./checkout.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/auth_error_code";

const Checkout = () => {
  const navigate = useNavigate();

  // state
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [provinceId, setProvinceId] = useState("0");
  const [districtId, setdistrictId] = useState("0");

  const listCarts = useSelector((state) => state.carts.carts);
  const total = listCarts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    getProvinces();
    getDistrict();
    getWard();
  }, [provinceId, districtId]);

  const getDistrict = async () => {
    const {
      data: { results },
    } = await axios.get(
      process.env.REACT_APP_GET_PROVINCE + "district/" + provinceId
    );
    setDistricts(results);
  };

  const getWard = async () => {
    const {
      data: { results },
    } = await axios.get(
      process.env.REACT_APP_GET_PROVINCE + "ward/" + districtId
    );
    setWards(results);
  };

  const getProvinces = async () => {
    const {
      data: { results },
    } = await axios.get(process.env.REACT_APP_GET_PROVINCE);
    setProvinces(results);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigate("/payment");
  };

  const handleProvince = (event) => {
    const getProvinceId = event.target.value;
    setProvinceId(getProvinceId);
    setWards([]);
  };

  const handleDistrict = (event) => {
    const getDistrictId = event.target.value;
    setdistrictId(getDistrictId);
  };

  return (
    <div>
      <div className={styles.title_checkout}>Delivery contact information</div>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_list_product}>
          {listCarts.map((listCart) => (
            <div key={listCart.id} className={styles.container_product}>
              <img
                src={listCart.image}
                alt=""
                className={styles.img_product_cart}
              />
              <div>
                <p>
                  {listCart.name}
                  <span className={styles.quantity_product}>
                    x{listCart.quantity}
                  </span>
                </p>
                <p className={styles.price_product}>
                  {formatPrice.format(listCart.price)}
                </p>
              </div>
            </div>
          ))}
          <div className={styles.txt_total}>
            <span>Total: </span>
            {formatPrice.format(total)}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper_form}>
          <label>Name:</label>
          <OutlinedInput
            className={styles.input_info}
            {...register("name", {
              required: true,
            })}
            placeholder="Name"
          />
          {errors?.name?.type === "required" && <p>Name is required!</p>}

          <label>Email:</label>
          <OutlinedInput
            className={styles.input_info}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type="email"
            placeholder="Email"
          />
          {errors.email?.type === "required" && <p>Email is required!</p>}
          {errors.email?.type === "pattern" && <p>Invalid Email Address!</p>}

          <label>Phone Number:</label>
          <OutlinedInput
            className={styles.input_info}
            {...register("phone", {
              required: true,
              minLength: 10,
            })}
            placeholder="Phone Number"
          />
          {errors?.phone?.type === "required" && (
            <p>Phone number is required!</p>
          )}
          {errors.phone?.type === "minLength" && (
            <p>Phone number must be 10 characters!</p>
          )}

          <label>Province:</label>
          <select
            className={styles.province}
            {...register("province", {
              required: true,
              onChange: handleProvince,
            })}
          >
            <option value="">-- Province --</option>
            {provinces.map((province) => (
              <option key={province.province_id} value={province.province_id}>
                {province.province_name}
              </option>
            ))}
          </select>
          {errors.province?.type === "required" && <p>Province is required!</p>}

          <label>District:</label>
          <select
            className={styles.province}
            {...register("district", {
              required: true,
              onChange: handleDistrict,
            })}
          >
            <option value="">-- District --</option>
            {districts.map((district) => (
              <option key={district.district_id} value={district.district_id}>
                {district.district_name}
              </option>
            ))}
          </select>
          {errors.district?.type === "required" && <p>District is required!</p>}

          <label>Ward:</label>
          <select
            className={styles.province}
            {...register("ward", { required: true })}
          >
            <option value="">-- Ward --</option>
            {wards.map((ward) => (
              <option key={ward.ward_id} value={ward.ward_id}>
                {ward.ward_name}
              </option>
            ))}
          </select>
          {errors.ward?.type === "required" && <p>Ward is required!</p>}

          <label>Address:</label>
          <OutlinedInput
            className={styles.input_info}
            {...register("address", {
              required: true,
            })}
            placeholder="Address"
          />
          {errors.address?.type === "required" && <p>Adress is required!</p>}

          <Button
            type="submit"
            className={styles.btn_checkout}
            variant="contained"
          >
            Checkout
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
