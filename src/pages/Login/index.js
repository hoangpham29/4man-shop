import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import routesConfig from "../../config/routes";
import styles from "./login.module.scss";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { login, loginWithGoogle } from "../../redux/usersSlice/usersSlice";

const Login = () => {
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

  const handleLoginGoogle = () => dispatch(loginWithGoogle());

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit}>
        <Box
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

          <Button
            onClick={handleLoginGoogle}
            sx={{
              marginTop: 3,
              borderRadius: 1,
              height: 35,
              width: "400px",
            }}
            variant="contained"
            color="warning"
          >
            <GoogleIcon sx={{ marginRight: 1 }} />
            Login with google
          </Button>
          <Link to={routesConfig.signup} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                marginTop: 3,
                borderRadius: 3,
              }}
            >
              Change to signup
            </Button>
          </Link>
          <Link to={routesConfig.home} className={styles.back_to_home}>
            Back to Home
          </Link>
        </Box>
      </ValidatorForm>
    </div>
  );
};

export default Login;
