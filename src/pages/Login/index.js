import { useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import routesConfig from "../../config/routes";
import styles from "./login.module.scss";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../redux/usersSlice/usersSlice";

const Login = () => {
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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        dispatch(login(values));
    };

    const handleLoginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const profilePic = result.user.photoURL;
                localStorage.setItem("user", profilePic);
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

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
                                            {values.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            label="Password"
                        />
                    </FormControl>
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
