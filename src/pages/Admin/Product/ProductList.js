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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
//api
import { getListProducts, destroy } from "../../../utils/product";
import { read } from "../../../utils/category";

import { formatPrice } from "../../../utils/auth_error_code";
import toastr from "toastr";
import { Link } from "react-router-dom";
import styles from "./productList.module.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
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

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const limitedProduct = 6;

  const count = Math.ceil(products.length / limitedProduct);

  const getProducts = async () => {
    const { data } = await getListProducts();
    setProduct(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    await destroy(id);
    toastr.success("Delete Success!");
    getProducts();
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProduct = currentPage * limitedProduct;
  const indexOfFirstProduct = indexOfLastProduct - limitedProduct;

  const limitProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <Link to="/admin/products/add">
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
              <StyledTableCell sx={{ width: "600px" }} align="center">
                Name
              </StyledTableCell>
              <StyledTableCell sx={{ width: "200px" }}>Image</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {limitProducts.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell align="center">{product.name}</StyledTableCell>
                <img className={styles.image} src={product.image} alt="" />
                <StyledTableCell align="center">
                  {product.category.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatPrice.format(product.price)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Link to={"/admin/products/" + product.id + "/edit"}>
                    <IconButton sx={{ marginRight: "20px" }}>
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton onClick={() => handleDelete(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack className={styles.pagination} spacing={2}>
        <Pagination
          count={count || 10}
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default ProductList;
