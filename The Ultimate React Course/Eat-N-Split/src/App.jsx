import './App.css';
import FormAddFriend from './components/FormAddFriend';
import FriendsList from './components/FriendsList';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () =>
    setShowAddFriend((showAddFriend) => !showAddFriend);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onclick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
