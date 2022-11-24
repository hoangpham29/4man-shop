import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/admin/categories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBarAdmin;
