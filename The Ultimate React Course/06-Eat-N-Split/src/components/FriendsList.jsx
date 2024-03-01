import React from 'react';

import Friend from './Friend';

const FriendsList = ({ friends, onSelectFriend, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
