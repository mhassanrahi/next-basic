import React from "react";
import { useRouter } from "next/router";

const Product = () => {
    const router = useRouter();

    const { productId } = router.query;

    return <div>Product {productId} details.</div>;
};

export default Product;
