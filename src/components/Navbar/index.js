import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import fourmanLogo from "../../assets/images/logo.png";
import styles from "./Navbar.module.scss";

function Navbar(props) {
  return (
    <div>
      <AppBar className={styles.header} sx={{ background: "#fff" }}>
        <Toolbar className={`${styles.container} ${styles.navbar}`}>
          <div className={styles.navbarLogo}>
            <img src={fourmanLogo} />
          </div>
          <Tabs className={styles.navbarList}>
            <Tab className={styles.dropdown} label="HÀNG MỚI" />
            <Tab className={styles.dropdown} label="ÁO NAM" />
            <Tab className={styles.dropdown} label="QUẦN NAM" />
            <Tab className={styles.dropdown} label="PHỤ KIỆN" />
            <Tab className={styles.dropdown} label="GIÀY DÉP" />
            <Tab className={styles.dropdown} label="KHUYẾN MÃI" />
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
