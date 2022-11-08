import * as React from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import Popper from "@mui/material/Popper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DrawerComp from "../../../components/DrawerComp";
import Logo from "../../../components/Logo";
import styles from "./Navbar.module.scss";
import routesConfig from "../../../config/routes";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usersSlice from "../../../redux/usersSlice/usersSlice";

const PAGES = [
  "HÀNG MỚI",
  "ÁO NAM",
  "QUẦN NAM",
  "PHỤ KIỆN",
  "GIÀY DÉP",
  "KHUYẾN MÃI",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.users.user);
  const numberCart = useSelector((state) => state.carts.carts.length);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const anchorRef = React.useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchEl, setSearchEl] = React.useState(null);

  const openPopper = (e) => setSearchEl(searchEl ? null : e.currentTarget);

  const handleLogout = () => dispatch(usersSlice.actions.logout());

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => setAnchorEl(null);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);

  const handleLogin = () => navigate("/login");

  const handleSignup = () => navigate("/signup");

  const renderMenu = (
    <Menu
      className={styles.menu}
      sx={{ marginTop: "35px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogin}>Login</MenuItem>
      <MenuItem onClick={handleSignup}>Sign Up</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar className={styles.header} sx={{ background: "#fff" }}>
        <Toolbar className={`${styles.container} ${styles.navbar}`}>
          {isMatch ? (
            <div className={styles.container_mb}>
              <Link to="/">
                <Logo />
              </Link>
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

                <div className={styles.navIcon}>
                  <Link to={routesConfig.cart}>
                    <Badge badgeContent={numberCart} color="error">
                      <IconButton
                        className={styles.btnIcon}
                        size="large"
                        aria-label="ShoppingCartIcon"
                        color="secondary"
                      >
                        <ShoppingCartIcon className={styles.icon} />
                      </IconButton>
                    </Badge>
                  </Link>
                </div>

                <div className={styles.navIcon}>
                  {user ? (
                    <IconButton
                      onClick={handleLogout}
                      className={styles.btnIcon}
                      size="large"
                      aria-label="search"
                      color="secondary"
                    >
                      <LoginIcon className={styles.icon} />
                    </IconButton>
                  ) : (
                    <IconButton
                      className={styles.btnIcon}
                      size="large"
                      aria-label="search"
                      color="secondary"
                      onClick={handleProfileMenuOpen}
                    >
                      <PersonIcon className={styles.icon} />
                    </IconButton>
                  )}
                </div>
                <div>
                  <DrawerComp />
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to={routesConfig.home}>
                <Logo />
              </Link>
              <ul className={styles.navbarList}>
                {PAGES.map((page, index) => (
                  <li key={index}>
                    <Link
                      to={routesConfig.products}
                      className={styles.dropdown}
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.navIcon}>
                <Link to={routesConfig.cart}>
                  <Badge badgeContent={numberCart} color="error">
                    <IconButton
                      className={styles.btnIcon}
                      size="large"
                      aria-label="ShoppingCartIcon"
                      color="secondary"
                    >
                      <ShoppingCartIcon className={styles.icon} />
                    </IconButton>
                  </Badge>
                </Link>

                <IconButton
                  className={styles.btnIcon}
                  size="large"
                  aria-label="search"
                  color="secondary"
                  onClick={openPopper}
                >
                  <SearchIcon className={styles.icon} />
                </IconButton>

                {user ? (
                  <IconButton
                    onClick={handleLogout}
                    className={styles.btnIcon}
                    size="large"
                    aria-label="search"
                    color="secondary"
                  >
                    <LoginIcon className={styles.icon} />
                  </IconButton>
                ) : (
                  <IconButton
                    className={styles.btnIcon}
                    size="large"
                    aria-label="search"
                    color="secondary"
                    onClick={handleProfileMenuOpen}
                  >
                    <PersonIcon className={styles.icon} />
                  </IconButton>
                )}

                <div ref={anchorRef}>
                  {searchEl && (
                    <Popper
                      open={true}
                      anchorEl={searchEl}
                      sx={{ zIndex: "drawer" }}
                    >
                      <Typography
                        component={"div"}
                        sx={{
                          marginTop: 1,
                          marginRight: 25,
                          border: 1,
                          p: 0.5,
                          bgcolor: "background.paper",
                          borderRadius: 1,
                        }}
                      >
                        <Search>
                          <StyledInputBase placeholder="Search…" />
                        </Search>
                      </Typography>
                    </Popper>
                  )}
                </div>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default Navbar;
