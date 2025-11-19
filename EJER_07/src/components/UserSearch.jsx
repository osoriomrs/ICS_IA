import { useEffect, useState } from "react";


function UserSearch() {
const [searchTerm, setSearchTerm] = useState("");
const [users, setUsers] = useState([]);


useEffect(() => {
const timer = setTimeout(() => {
if (searchTerm.trim() === "") {
setUsers([]);
return;
}


fetch(`https://jsonplaceholder.typicode.com/users?username=${searchTerm}`)
.then((res) => res.json())
.then((data) => setUsers(data));
}, 500);


return () => clearTimeout(timer);
}, [searchTerm]);


return (
<div>
<input
type="text"
placeholder="Buscar usuario..."
onChange={(e) => setSearchTerm(e.target.value)}
/>


<ul>
{users.map((u) => (
<li key={u.id}>{u.username}</li>
))}
</ul>
</div>
);
}


export default UserSearch;