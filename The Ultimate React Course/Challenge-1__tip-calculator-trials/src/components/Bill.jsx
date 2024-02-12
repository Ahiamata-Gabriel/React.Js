const Bill = ({ bill, setBill }) => {
  return (
    <div className="Container">
      <p>How much was the bill ?</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default Bill;
