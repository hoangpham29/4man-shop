import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import routesConfig from "../../../config/routes";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const SignUp = () => {
    const [values, setValues] = useState({
        name: "",
        password: "",
        confirmpassword: "",
        email: "",
        showPassword: false,
    });

    useEffect(() => {
        if (!ValidatorForm.hasValidationRule("isPasswordMatch")) {
            ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
                if (value !== values.password) {
                    return false;
                }
                return true;
            });
        }

        return () => {
            if (ValidatorForm.hasValidationRule("isPasswordMatch")) {
                ValidatorForm.removeValidationRule("isPasswordMatch");
            }
        };
    }, [values.password]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const handleSubmit = (data) => {
        console.log(data);
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
                        Sign Up
                    </Typography>
                    <Box mb={-1}>
                        <TextValidator
                            sx={{ width: 400 }}
                            margin="normal"
                            label="Name"
                            value={values.name}
                            onChange={handleChange("name")}
                            validators={["required"]}
                            errorMessages={["This field is required."]}
                        />
                    </Box>
                    <Box>
                        <TextValidator
                            sx={{ width: 400 }}
                            margin="normal"
                            label="Email"
                            value={values.email}
                            onChange={handleChange("email")}
                            validators={["required", "isEmail"]}
                            errorMessages={[
                                "This field is required.",
                                "Email is not valid",
                            ]}
                        />
                    </Box>
                    <FormControl sx={{ m: 1 }} variant="outlined">
                        <TextValidator
                            sx={{ width: 400 }}
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
                    <FormControl sx={{ m: 1 }} variant="outlined">
                        <TextValidator
                            sx={{ width: 400 }}
                            type={
                                values.showConfirmPassword ? "text" : "password"
                            }
                            value={values.confirmpassword}
                            onChange={handleChange("confirmpassword")}
                            validators={["isPasswordMatch", "required"]}
                            errorMessages={[
                                "password mismatch",
                                "This field is required",
                            ]}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            edge="end"
                                        >
                                            {values.showConfirmPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            label="Confirm Password"
                        />
                    </FormControl>
                    <Button
                        sx={{
                            marginTop: 3,
                            borderRadius: 1,
                            width: 400,
                            height: 35,
                        }}
                        variant="contained"
                        color="warning"
                        type="submit"
                    >
                        Sign Up
                    </Button>
                    <Link
                        to={routesConfig.login}
                        style={{ textDecoration: "none" }}
                    >
                        <Button
                            sx={{
                                marginTop: 3,
                                borderRadius: 3,
                            }}
                        >
                            Back to login
                        </Button>
                    </Link>
                </Box>
            </ValidatorForm>
        </div>
    );
};

export default SignUp;
