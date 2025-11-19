import { useState } from 'react'
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import PostViewer from "./components/PostViewer";
import UserSearch from "./components/UserSearch";
import PostComments from "./components/PostComments";
import NewPostForm from "./components/NewPostForm";


function App() {
const [selected, setSelected] = useState("posts");


return (
<div style={{ padding: "20px" }}>
<h1>Ejercicios useEffect</h1>


<select value={selected} onChange={(e) => setSelected(e.target.value)}>
<option value="posts">Ejercicio 1: PostList</option>
<option value="details">Ejercicio 2: PostDetails</option>
<option value="search">Ejercicio 3: UserSearch</option>
<option value="comments">Ejercicio 4: PostComments</option>
<option value="newpost">Ejercicio 5: NewPostForm</option>
</select>


<hr />


{selected === "posts" && <PostList />}
{selected === "details" && <PostViewer />}
{selected === "search" && <UserSearch />}
{selected === "comments" && <PostComments postId={1} />}
{selected === "newpost" && <NewPostForm />}
</div>
);
}


export default App;