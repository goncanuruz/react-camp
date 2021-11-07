import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Grid>

        <Grid.Row>
          <Grid.Column className="grid" mobile={16} tablet={4} computer={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column className="grid" mobile={16} tablet={12} computer={12}>
            <Routes>
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/products/:id" element={<ProductDetail />} />
              <Route exact path="/cart" element={<CartDetail />} />
              <Route exact path="/product/add" element={<ProductAdd/>} />
            </Routes>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}