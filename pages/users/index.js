import React from "react";
import Link from "next/link";

function Users({ users }) {
    return (
        <>
            <h5>
                <Link href="/">
                    <a>Go to Homepage</a>
                </Link>
            </h5>
            <h1>List of users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id.toString()}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get users
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

export default Users;
