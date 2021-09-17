import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/product");
    };
    return (
        <>
            <div>Home</div>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <br />
            <Link href="/product">
                <a>Products</a>
            </Link>
            <br />
            <button onClick={handleClick}>Place Order</button>
        </>
    );
};

export default Home;
