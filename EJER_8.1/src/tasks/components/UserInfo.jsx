import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthContext.jsx';

export default function UserInfo() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="user-info">
      Usuario actual: <strong>{currentUser}</strong>
    </div>
  );
}
