import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Sales from "./pages/sales/Sales";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import { AuthContext } from "./context/AuthContext";

function App() {
  // const ProtectedRoute = ({ children }) => {
  //   const { user } = useContext(AuthContext);
  // };

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="login" element={<Login />} />
    //     <Route path="products" element={<Products />}>
    //       <Route index element={<List />} />
    //       <Route path=":productId" element={<Single />} />
    //       <Route
    //         path="new"
    //         element={<New inputs={productInputs} title="Add New Product" />}
    //       />
    //     </Route>
    //     <Route path="orders" element={<Orders />}>
    //       <Route index element={<List />} />
    //       <Route path=":orderId" element={<Single />} />
    //       <Route
    //         path="new"
    //         element={<New inputs={orderInputs} title="Add New Order" />}
    //       />
    //     </Route>
    //     <Route path="sales" element={<Sales />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
