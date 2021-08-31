import React from "react";
import { useRouter } from "next/router";

const Product = () => {
    const router = useRouter();

    const { productId } = router.query;

    return <div>Product {productId} Detail</div>;
};

export default Product;
