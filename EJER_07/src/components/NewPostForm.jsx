import { useCallback, useEffect, useState } from "react";


function NewPostForm() {
const [form, setForm] = useState({ title: "", body: "" });
const [createdPost, setCreatedPost] = useState(null);


const addPost = useCallback(async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});


const data = await res.json();
setCreatedPost(data);
}, [form]);


useEffect(() => {
if (createdPost) {
console.log("Nuevo post creado:", createdPost);
}
}, [addPost, createdPost]);


const handleSubmit = (e) => {
e.preventDefault();
addPost();
};


return (
<form onSubmit={handleSubmit}>
<input
placeholder="Título"
value={form.title}
onChange={(e) => setForm({ ...form, title: e.target.value })}
/>


<textarea
placeholder="Contenido"
value={form.body}
onChange={(e) => setForm({ ...form, body: e.target.value })}
/>


<button type="submit">Crear Post</button>
</form>
);
}


export default NewPostForm;