import React, { useEffect, useState } from 'react';
import { ReactComponent as DeleteIcon } from './icons/delete.svg';
import { ReactComponent as FilledHeard } from './icons/heart-one.svg';
import { ReactComponent as BlankHeart } from './icons/heart-two.svg';
import { ReactComponent as Fallback } from './icons/fallback.svg';

import './FriendList.css';
import usePagination from './hooks/usePagination';
import Pagination from './components/Pagination';

const FriendList = ({ list, unfriend, addFavorites, sortFavorites }) => {
  const [friendList, setFriendList] = useState(list);

  const PER_PAGE = 4;

  const { moveTo, presentList, currentPage, totalPages } = usePagination(
    friendList,
    PER_PAGE
  );

  const handleChange = (e, p) => {
    console.log('funtion');
    moveTo(p);
  };
  console.log('children list', list);
  const filterSearch = (e) => {
    const friendList = list.filter((f) =>
      f.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(friendList);
    setFriendList(friendList);
  };

  useEffect(() => {
    setFriendList(list);
  }, [list]);

  return (
    <div className="card-container">
      <h1>Friendlist</h1>
      <div className="action-on-list">
        <input
          type="text"
          placeholder="Enter your friend's name"
          onChange={filterSearch}
        ></input>
        <button onClick={sortFavorites}>Sort Favorites</button>
      </div>

      {!Boolean(friendList.length) ? (
        <>
          <p>Why so lonely? Make friends.</p>
          <Fallback style={{ height: '100px', width: '100px' }} />
        </>
      ) : (
        <div style={{ minHeight: '420px' }}>
          {presentList().map((friend) => (
            <ol>
              <li className="friend-card">
                <div>
                  <h4>{friend.name}</h4>
                  <p>is your friend</p>
                </div>
                <div className="action-section">
                  <p
                    onClick={() => {
                      addFavorites(friend);
                    }}
                  >
                    {friend.isFavorite ? <FilledHeard /> : <BlankHeart />}
                  </p>
                  <DeleteIcon
                    onClick={() => {
                      unfriend(friend.id);
                    }}
                  >
                    delete
                  </DeleteIcon>
                </div>
              </li>
            </ol>
          ))}
        </div>
      )}
      <Pagination
        handleChange={handleChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default FriendList;
