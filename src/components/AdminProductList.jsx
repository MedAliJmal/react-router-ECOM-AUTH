import React from "react";
import { useSelector } from "react-redux";
import AdminProductCard from "./AdminProductCard";
import { Navigate } from "react-router-dom";
import AddProduct from "./AddProduct";

const AdminProductList = ({ search }) => {
  const { products } = useSelector((state) => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);
  console.log(products);
  return (
    <div>
      {user.role === "admin" && user.isLoggedIn === true ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {products
              .filter((el) =>
                el.name
                  .toLowerCase()
                  .trim()
                  .includes(search.toLowerCase().trim())
              )
              .map((el) => (
                <AdminProductCard el={el} key={el.id} />
              ))}
          </div>
          <AddProduct />
        </div>
      ) : (
        <Navigate to="/user/products" />
      )}
    </div>
  );
};

export default AdminProductList;
