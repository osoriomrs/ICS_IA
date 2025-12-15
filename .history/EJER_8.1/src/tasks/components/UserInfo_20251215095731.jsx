import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';

export default function UserInfo() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="user-info">
      Usuario actual: <strong>{currentUser}</strong>
    </div>
  );
}
