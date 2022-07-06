import React from "react";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { products } from "../../../src/dataSet/dummyData";
import Button from "../../components/button/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const columns = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "productName", headerName: "Title", width: 150 },
  { field: "brandId", headerName: "Brand", width: 150 },
  { field: "categoryId", headerName: "Category", width: 150 },
  { field: "subCategoryId", headerName: "Sub Category", width: 150 },
  { field: "size", headerName: "Size", width: 60 },
  { field: "color", headerName: "Color", width: 60 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 90,
  },
  {
    field: "action",
    headerName: "Actions",
    width: 250,
    renderCell: (params) => {
      return (
        <>
          {/* <Button
            btnName={""}
            btnColor={"blue"}
            btnIcon={<AddOutlinedIcon />}
            style={{ marginRight: "0.5rem" }}
          /> */}
          <Button
            btnName={""}
            btnColor={"green"}
            btnIcon={<ModeEditOutlineOutlinedIcon />}
            style={{ marginRight: "0.5rem" }}
          />
          <Button
            btnName={""}
            btnColor={"red"}
            btnIcon={<DeleteOutlinedIcon />}
          >
            <DeleteOutlinedIcon />
          </Button>
        </>
      );
    },
  },

  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const productList = products.map((product) => product);
const actionButtons = [];

const Products = () => {
  return (
    <div className="products">
      <Topbar />
      <div className="pageContentContainer">
        <Sidebar />
        <div className="productsContent">
          <div className="productTitleRow">
            <h2 className="productsTitle">Products</h2>
            <Button
              btnName={""}
              btnColor={"blue"}
              btnIcon={<AddOutlinedIcon />}
              style={{ marginRight: "0.5rem" }}
            />
          </div>

          <div className="productsTable">
            <DataGrid
              rows={productList}
              columns={columns}
              pageSize={15}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              //   checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
