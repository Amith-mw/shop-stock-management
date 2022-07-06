import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Sales from "./pages/sales/Sales";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import { AuthContext } from "./context/AuthContext";
import { dividerClasses } from "@mui/material";

import "./app.css";
import CreateProduct from "./pages/products/CreateProduct";
import CreateOrder from "./pages/orders/CreateOrder";
import Brands from "./pages/brands/Brands";
import CreateBrand from "./pages/brands/CreateBrand";
import Categories from "./pages/categories/Categories";
import CreateCategory from "./pages/categories/CreateCategory";
import Subcategories from "./pages/subcategories/Subcategories";
import CreateSubcategory from "./pages/subcategories/CreateSubcategory";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to={"/login"} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="stats" element={<Home />} />
          <Route
            path="products"
            //   <ProtectedRoute>
            //     <Products />
            //   </ProtectedRoute>
            // }
            element={<Products />}
          ></Route>
          <Route path="brands" element={<Brands />}></Route>
          <Route path="brands/create" element={<CreateBrand />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route path="categories/create" element={<CreateCategory />}></Route>
          <Route path="subcategories" element={<Subcategories />}></Route>
          <Route
            path="subcategories/create"
            element={<CreateSubcategory />}
          ></Route>
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="orders" element={<Orders />}></Route>
          <Route path="orders/create" element={<CreateOrder />}></Route>
          <Route path="sales" element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
