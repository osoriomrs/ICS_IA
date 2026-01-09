import React from 'react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

export default function PostsListPage() {
  return (
    <div>
      <h2>Lista de Artículos</h2>
      <ul>
        {POSTS.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
