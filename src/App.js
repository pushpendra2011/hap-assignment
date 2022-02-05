import './App.css';
import FriendList from './FriendList';
import { useEffect, useState } from 'react';
import MakeFriends from './MakeFriends';

function App() {
  const friendList = [
    {
      id: 1,
      name: 'Clover Rhythmtrip',
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Sage Zenfields',
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Aura Naturespirit',
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Ocean Soulquest',
      isFavorite: false,
    },
  ];
  const [list, setList] = useState(friendList);

  const unfriend = (id) => {
    if (window.confirm('Are you sure you want to unfriend?')) {
      const toDelete = [...list];
      toDelete.splice(
        toDelete.findIndex((a) => a.id === id),
        1
      );
      console.log('toDelete', toDelete);
      setList(toDelete);
    }
  };

  const sortFavorites = () => {
    console.log('sort', list);
    const newArr = [...list];
    const sortedData = newArr.sort((x, y) => {
      if (x.isFavorite === y.isFavorite) return 0;
      if (x.isFavorite) return -1;
      return 1;
    });
    setList(sortedData);
  };

  const addFriend = (name) => {
    console.log(Math.random() * 100);
    const newFriend = {
      id: parseInt(Math.random() * 1000),
      name: name,
      isFavorite: false,
    };
    setList([...list, newFriend]);
  };
  const addFavorites = (friend) => {
    setList(
      list.map((el) =>
        el.id === friend.id ? { ...el, isFavorite: !friend.isFavorite } : el
      )
    );
  };
  useEffect(() => {
    console.log('useEffect triggered', list);
  }, [list]);
  return (
    <>
      <div className="App">
        <FriendList
          list={list}
          setList={setList}
          unfriend={unfriend}
          addFavorites={addFavorites}
          sortFavorites={sortFavorites}
        />
        <MakeFriends addFriend={addFriend} />
      </div>
    </>
  );
}

export default App;
