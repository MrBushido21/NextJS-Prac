
type PropsType = {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, 
        {
            next: {
                revalidate: 60,
            },
    })
    return response.json()
}

export async function generateMetadata({params: {id}}: PropsType) {
    const post = await getData(id)
    return {
        title: post.title
    }
}

async function PostPage({params: {id}}: PropsType) {
    const post = await getData(id)
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}
export default PostPage;