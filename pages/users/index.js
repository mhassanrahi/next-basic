import React from "react";
import Link from "next/link";

function Users() {
    return (
        <>
            <h5>
                <Link href="/">
                    <a>Go to Homepage</a>
                </Link>
            </h5>
            <h1>List of users</h1>
        </>
    );
}

export default Users;
