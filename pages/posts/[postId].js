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
    // Call an external API endpoint to get posts
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await res.json();

    posts = posts.slice(0, 10);

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { postId: post.id.toString() },
    }));

    return { paths, fallback: false };
}
