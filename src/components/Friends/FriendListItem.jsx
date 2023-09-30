import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-list-item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
