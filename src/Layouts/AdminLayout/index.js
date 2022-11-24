import TopBarAdmin from "../components/TopBarAdmin";
import SideBarAdmin from "../components/SideBarAdmin";
import styles from "./adminLayout.module.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const user = useSelector((state) => state.users.user);
  if (user?.email === "mydog@gmail.com") {
    return (
      <div>
        <TopBarAdmin />
        <div className={styles.wrapper}>
          <SideBarAdmin />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    );
  }
  return <Navigate to={"/admin/login"} />;
};

export default AdminLayout;
