import { useEffect, useState } from "react";


function PostDetails({ postId }) {
const [post, setPost] = useState(null);


useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then((res) => res.json())
.then((data) => setPost(data));
}, [postId]);


if (!post) return <p>Cargando...</p>;


return (
<div>
<h2>{post.title}</h2>
<p>{post.body}</p>
</div>
);
}


export default PostDetails;