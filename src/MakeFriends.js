import React, { useState } from 'react';

const MakeFriends = ({ addFriend }) => {
  const [newFriend, setNewFriend] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addFriend(newFriend);
  };
  return (
    <div>
      <h1>Add friends</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <input
            placeholder="Add friends"
            onChange={(e) => {
              setNewFriend(e.target.value);
            }}
            type="text"
          />
          <button disabled={!Boolean(newFriend.length)} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeFriends;
