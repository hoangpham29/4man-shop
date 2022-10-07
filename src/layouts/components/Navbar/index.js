import * as React from "react";
import {
    AppBar,
    Tabs,
    Tab,
    Toolbar,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerComp from "../../../components/DrawerComp";
import Logo from "../../../components/Logo";
import styles from "./Navbar.module.scss";

const PAGES = [
    "HÀNG MỚI",
    "ÁO NAM",
    "QUẦN NAM",
    "PHỤ KIỆN",
    "GIÀY DÉP",
    "KHUYẾN MÃI",
];

const Navbar = (props) => {
    // const [value, setValue] = React.useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    // const handleChange = (event, newValue) => setValue(newValue);

    return (
        <div>
            <AppBar className={styles.header} sx={{ background: "#fff" }}>
                <Toolbar className={`${styles.container} ${styles.navbar}`}>
                    {isMatch ? (
                        <div className={styles.container_mb}>
                            <Logo className={styles.logo_navbar} />
                            <div className={styles.icon_mb}>
                                <div className={styles.navIcon}>
                                    <IconButton
                                        className={styles.btnIcon}
                                        size="large"
                                        aria-label="search"
                                        color="secondary"
                                    >
                                        <SearchIcon className={styles.icon} />
                                    </IconButton>
                                </div>
                                <div>
                                    <DrawerComp />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Logo className={styles.logo_navbar} />
                            <Tabs
                                className={styles.navbarList}
                                value="1"
                                indicatorColor="inherit"
                            >
                                {PAGES.map((page, index) => (
                                    <Tab
                                        key={index}
                                        label={page}
                                        value="1"
                                        className={styles.dropdown}
                                    ></Tab>
                                ))}
                            </Tabs>
                            <div className={styles.navIcon}>
                                <IconButton
                                    className={styles.btnIcon}
                                    size="large"
                                    aria-label="ShoppingCartIcon"
                                    color="secondary"
                                >
                                    <ShoppingCartIcon className={styles.icon} />
                                </IconButton>

                                <IconButton
                                    className={styles.btnIcon}
                                    size="large"
                                    aria-label="search"
                                    color="secondary"
                                >
                                    <SearchIcon className={styles.icon} />
                                </IconButton>
                            </div>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
