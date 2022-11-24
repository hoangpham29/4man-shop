import React from "react";
import { useEffect, useState } from "react";
//MUI
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
//api
import { read, destroy } from "../../../utils/category";
import toastr from "toastr";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await read();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    await destroy(categoryId);
    toastr.success("Delete Success!");
    getCategories();
  };

  return (
    <div>
      <Link to="/admin/categories/add">
        <IconButton
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#ccc",
            color: "#333",
            margin: "20px",
          }}
        >
          <AddIcon sx={{ fontSize: "40px" }} />
        </IconButton>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <StyledTableRow key={category.id}>
                <StyledTableCell component="th" scope="row">
                  {category.name}
                </StyledTableCell>
                <StyledTableCell align="center">{category.id}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link to={"/admin/categories/" + category.id + "/edit"}>
                    <IconButton sx={{ marginRight: "20px" }}>
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton onClick={() => handleDelete(category.id)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CategoryAdmin;
