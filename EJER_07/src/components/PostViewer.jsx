import { useState } from "react";
import PostDetails from "./PostDetails";


function PostViewer() {
const [id, setId] = useState(1);


return (
<div>
<input
type="number"
value={id}
onChange={(e) => setId(e.target.value)}
/>


<PostDetails postId={id} />
</div>
);
}


export default PostViewer;