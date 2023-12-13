import React from "react";
import { useSelector } from "react-redux";
import StaticProductCard from "./StaticProductCard";

const UserProductList = ({ search }) => {
  const { products } = useSelector((state) => state.productReducer);
  return (
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
            el.name.toLowerCase().trim().includes(search.toLowerCase().trim())
          )
          .map((el) => (
            <StaticProductCard el={el} key={el.id} />
          ))}
      </div>
    </div>
  );
};

export default UserProductList;
