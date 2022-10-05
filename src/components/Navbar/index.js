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
          <Tabs className={styles.navbarList} value="1">
            <Tab className={styles.dropdown} label="HÀNG MỚI" value="1" />
            <Tab className={styles.dropdown} label="ÁO NAM" value="2" />
            <Tab className={styles.dropdown} label="QUẦN NAM" value="3" />
            <Tab className={styles.dropdown} label="PHỤ KIỆN" value="4" />
            <Tab className={styles.dropdown} label="GIÀY DÉP" value="5" />
            <Tab className={styles.dropdown} label="KHUYẾN MÃI" value="6" />
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
