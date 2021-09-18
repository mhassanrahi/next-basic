import { Post } from "../../components/Post";

function Posts({ posts }) {
    return (
        <>
            <h1>List of Posts</h1>
            <ul>
                {posts.map((post) => (
                    <Post post={post} key={post.id.toString()} />
                ))}
            </ul>
        </>
    );
}
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
        props: { posts: posts.slice(0, 10) },
    };
}
export default Posts;
