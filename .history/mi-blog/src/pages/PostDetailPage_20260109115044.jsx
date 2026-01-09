import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

export default function PostDetailPage() {
  const { postId } = useParams();
  const post = POSTS.find(p => p.id === Number(postId));

  if (!post) return <h2>Artículo no encontrado</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/posts">Volver a la lista de artículos</Link>
    </div>
  );
}
