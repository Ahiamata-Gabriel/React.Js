import React, { useState } from 'react';
import Button from './Button';

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label> Friend Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />

      <label> Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
