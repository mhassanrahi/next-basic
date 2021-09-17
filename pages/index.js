import React from "react";
import Link from "next/link";

const Home = () => {
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
        </>
    );
};

export default Home;
