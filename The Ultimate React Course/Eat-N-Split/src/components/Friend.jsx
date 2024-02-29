import React from 'react';
import Button from './Button';

const Friend = ({ friend, onSelectFriend, selectedFriend }) => {
  // const isSelected = selectedFriend.id === friend.id;
  const isSelected =
    selectedFriend !== null ? selectedFriend.id === friend.id : false;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are square</p>}
      <Button onclick={() => onSelectFriend(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default Friend;
