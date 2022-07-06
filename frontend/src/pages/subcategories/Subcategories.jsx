import React from "react";
import "./Subcategories.css";
import { DataGrid } from "@mui/x-data-grid";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { subCategories } from "../../../src/dataSet/dummyData";
import Button from "../../components/button/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const columns = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "subCategoryName", headerName: "Sub Category Name", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
  {
    field: "action",
    headerName: "Actions",
    width: 150,
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
          ></Button>
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

const subCategoriesList = subCategories.map((category) => category);
const actionButtons = [];

const Subcategories = () => {
  return (
    <div className="subCategories">
      <Topbar />
      <div className="subCategoriesContainer">
        <Sidebar />
        <div className="subCategoriesContent">
          <div className="subCategoryTitleRow">
            <h2 className="subCategoryTitle">Sub Categories</h2>
            <Button
              btnName={""}
              btnColor={"blue"}
              btnIcon={<AddOutlinedIcon />}
              style={{ marginRight: "0.5rem" }}
            />
            {/* <button className="btnAddNew">Add Product</button> */}
          </div>

          <div className="brandsTable">
            <DataGrid
              rows={subCategoriesList}
              columns={columns}
              pageSize={5}
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

export default Subcategories;
