import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './userprofile.css';

function UserProfile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <div className='userprofile'>
      <div className="profile-body">
        <h1>User Profile</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
