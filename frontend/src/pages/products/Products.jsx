import React, { useState } from "react";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Products = () => {
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch("/products");

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
    } catch (err) {}
    setList(list.filter((listItem) => listItem.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productName", headerName: "Product Name", width: 130 },
    { field: "desc", headerName: "Description", width: 130 },
    {
      field: "size",
      headerName: "Size",
      width: 60,
    },
    {
      field: "color",
      headerName: "Color",
      width: 90,
    },
    {
      field: "qty",
      headerName: "Quantity",
      type: "number",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      type: "number",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${10}`}>
              <button className="productEdit">Edit</button>
            </Link>
            <button
              className="productDelete"
              onClick={handleDelete(params.row._id)}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      productName: "Snow",
      desc: "Jon",
      size: 35,
      color: "Green",
      qty: 10,
      price: 150,
    },
  ];

  return (
    <div className="ordersContainer">
      <Topbar />
      <div className="pageContentContainer">
        <Sidebar />
        <div className="dataTableContainer">
          <h2 className="orderTitle">Products</h2>
          <div style={{ height: "80vh", width: "100%" }}>
            <DataGrid
              rows={list}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              getRowId={(row) => row._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
