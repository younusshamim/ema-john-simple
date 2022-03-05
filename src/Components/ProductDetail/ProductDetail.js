import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const selectedProduct = fakeData.find((prdct) => prdct.key === productKey);

  return (
    <div>
      <Product product={selectedProduct} showAddToCart={false} />
    </div>
  );
};

export default ProductDetail;
