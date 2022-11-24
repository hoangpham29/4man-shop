import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  return (
    <div>
      <Box sx={{ marginTop: "30px" }}>
        <Typography sx={{ fontSize: "23px", color: "#888" }}>
          Welcome to Admin Panel
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "#888" }}>
          This is the board to control all the products and categories!
        </Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
