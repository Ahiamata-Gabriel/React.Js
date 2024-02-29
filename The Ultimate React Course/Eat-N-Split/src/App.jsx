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
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () =>
    setShowAddFriend((showAddFriend) => !showAddFriend);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    setSelectedFriend(friend);
    // setSelectedFriend((selected) => (selected.id ? null : friend));
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onclick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
