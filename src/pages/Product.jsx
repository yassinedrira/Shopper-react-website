import React, { useContext } from "react";
import './CSS/Product.css'
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const useProduct = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  return all_product.find((e) => e.id === Number(productId));
};

const Product = () => {
  const product = useProduct();

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
