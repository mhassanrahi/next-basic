import React from "react";
import Link from "next/link";

const Products = () => {
    return (
        <div>
            <h3>Product 1</h3>
            <h3>Product 2</h3>
            <h3>Product 3</h3>

            <h5>
                <Link href="/">
                    <a>Go to homepage</a>
                </Link>
            </h5>
        </div>
    );
};

export default Products;
