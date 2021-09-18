function PostDetails({ post }) {
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    );
}

export default PostDetails;

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const post = await res.json();

    return {
        props: { post },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: "1" } },
            { params: { postId: "2" } },
            { params: { postId: "3" } },
            { params: { postId: "4" } },
            { params: { postId: "5" } },
            { params: { postId: "6" } },
            { params: { postId: "7" } },
            { params: { postId: "8" } },
            { params: { postId: "9" } },
            { params: { postId: "10" } },
        ],
        fallback: false,
    };
}
