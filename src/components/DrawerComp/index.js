import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import styles from "./DrawerComp.module.scss";
import { Link } from "react-router-dom";
import routesConfig from "../../config/routes";

const PAGES = [
  "HÀNG MỚI",
  "ÁO NAM",
  "QUẦN NAM",
  "PHỤ KIỆN",
  "GIÀY DÉP",
  "KHUYẾN MÃI",
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Link to={routesConfig.products} onClick={() => setOpenDrawer(false)}>
          <List>
            {PAGES.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Link>
      </Drawer>
      <div className={styles.navIcon}>
        <IconButton
          className={styles.btnIcon}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon className={styles.icon} />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export default DrawerComp;
