import Link from "next/link";
import HeaderPage from "../Header/page";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });

    if(!response.ok) throw new Error("Unable to fetch posts!")

    return response.json()
}

async function BlogPage() {
    const posts = await getData()
return (
    <>
        <div>ITS MY BLOG</div>
        <ul>
            {posts.map((post:any) => (
                <li key={post.id}>
                    <Link href={`/components/Blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </>

);
}
export default BlogPage;