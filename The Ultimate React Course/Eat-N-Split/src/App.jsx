import './App.css';
import FormAddFriend from './components/FormAddFriend';
import FriendsList from './components/FriendsList';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import { initialFriends } from './assets/Data';
import { useState } from 'react';

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () =>
    setShowAddFriend((showAddFriend) => !showAddFriend);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onclick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
