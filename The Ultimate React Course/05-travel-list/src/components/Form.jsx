import React, { useState } from 'react';

const Form = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!desc) {
      return;
    }

    const newItem = { desc, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDesc('');
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
