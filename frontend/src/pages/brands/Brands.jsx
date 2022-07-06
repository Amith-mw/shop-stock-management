import React from "react";
import "./Brands.css";
import { DataGrid } from "@mui/x-data-grid";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { brands } from "../../../src/dataSet/dummyData";
import Button from "../../components/button/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Link } from "react-router-dom";

const columns = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "brandName", headerName: "Brand Name", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
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

const brandsList = brands.map((brand) => brand);
const actionButtons = [];

const Brands = () => {
  return (
    <div className="brands">
      <Topbar />
      <div className="brandsContainer">
        <Sidebar />
        <div className="brandsContent">
          <div className="brandTitleRow">
            <h2 className="brandTitle">Brands</h2>
            <Link to={"/brands/create"}>
              <Button
                btnName={""}
                btnColor={"blue"}
                btnIcon={<AddOutlinedIcon />}
                style={{ marginRight: "0.5rem" }}
              />
            </Link>
            {/* <button className="btnAddNew">Add Product</button> */}
          </div>

          <div className="brandsTable">
            <DataGrid
              rows={brandsList}
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

export default Brands;
