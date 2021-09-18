import Link from "next/link";

export function Post({ post }) {
    return (
        <>
            <Link href={`posts/${post.id}`} passHref>
                <h5>
                    {post.id} - {post.title}
                </h5>
            </Link>
            <p>{post.body}</p>
        </>
    );
}
