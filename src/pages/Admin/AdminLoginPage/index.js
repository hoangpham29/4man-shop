import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/usersSlice/usersSlice";
import toastr from "toastr";

const AdminLoginPage = () => {
  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = () => dispatch(login(values));

  useEffect(() => {
    if (user) {
      if (user?.email === "mydog@gmail.com") {
        navigate("/admin");
      } else {
        toastr.error("You can have do not access");
      }
    }
  }, [navigate, user]);

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit}>
        <Box
          className={styles.wrapper}
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems="center"
          maxWidth={500}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Login
          </Typography>
          <TextValidator
            className={styles.input_email}
            sx={{ width: "400px" }}
            margin="normal"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
            validators={["required", "isEmail"]}
            errorMessages={["This field is required.", "Email is not valid"]}
          />
          <FormControl sx={{ m: 1 }} variant="outlined">
            <TextValidator
              className={styles.input_password}
              sx={{ width: "400px" }}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              validators={["required", "minStringLength: 6"]}
              errorMessages={[
                "This field is required",
                "Password must be more than 6 characters",
              ]}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
            />
          </FormControl>
          {loading ? (
            <Button
              className={styles.button}
              sx={{
                marginTop: 3,
                borderRadius: 1,
                height: 35,
                width: "400px",
              }}
              disabled
              variant="outlined"
            >
              Login
            </Button>
          ) : (
            <Button
              className={styles.button}
              sx={{
                marginTop: 3,
                borderRadius: 1,
                height: 35,
                width: "400px",
              }}
              variant="contained"
              color="warning"
              type="submit"
            >
              Login
            </Button>
          )}

          <Link to="/" className={styles.back_to_home}>
            Back to Home
          </Link>
        </Box>
      </ValidatorForm>
    </div>
  );
};

export default AdminLoginPage;
