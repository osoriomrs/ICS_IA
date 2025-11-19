import { useEffect, useState } from "react";


function PostComments({ postId }) {
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);


useEffect(() => {
const loadComments = async () => {
setIsLoading(true);
setError(null);


try {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);


if (!res.ok) throw new Error("Error cargando comentarios");


const data = await res.json();
setComments(data);
} catch (err) {
setError(err.message);
}


setIsLoading(false);
};


loadComments();
}, [postId]);


if (isLoading) return <p>Cargando comentarios...</p>;
if (error) return <p>Error: {error}</p>;


return (
<ul>
{comments.map((c) => (
<li key={c.id}>{c.body}</li>
))}
</ul>
);
}


export default PostComments;