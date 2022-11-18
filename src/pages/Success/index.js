import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./success.module.scss";
import { succeeded } from "../../utils/auth_error_code";
import { useSearchParams } from "react-router-dom";
import cartsSlice from "../../redux/cartsSlice/cartsSlice";
import { useDispatch } from "react-redux";

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [count, setCount] = useState(12);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("redirect_status") === succeeded) {
      dispatch(cartsSlice.actions.clearCart());
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  if (count === 0) {
    navigate("/");
  }

  return (
    <div className={styles.content}>
      <div className={styles.wrapper_1}>
        <div className={styles.wrapper_2}>
          <h1>Success!</h1>
          <p>Thank you for purchasing our products!</p>
          <Button
            className={styles.go_home}
            variant="contained"
            onClick={() => navigate("/")}
          >
            go home
          </Button>
        </div>
        <div className={styles.footer_like}>
          <p>You will comback to Homepage later: {count}s</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
