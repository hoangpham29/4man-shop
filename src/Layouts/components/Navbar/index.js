import * as React from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
import SearchModal from "../../../components/Search";
import usersSlice from "../../../redux/usersSlice/usersSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.users.user);
  const numberCart = useSelector((state) => state.carts.carts.length);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);

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
                <SearchModal />

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
                <li>
                  <Link to={routesConfig.home} className={styles.dropdown}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to={routesConfig.products} className={styles.dropdown}>
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link className={styles.dropdown}>BLOG</Link>
                </li>
                <li>
                  <Link to={routesConfig.contact} className={styles.dropdown}>
                    CONTACT
                  </Link>
                </li>
              </ul>
              <div>
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
                <SearchModal />

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
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default Navbar;
