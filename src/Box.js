const Box = ({ data, onageChange }) => {
  const increaseAge = () => {
    onageChange(DataTransferItem);
  };
  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.age}</h2>
      <button onClick={increaseAge}>Increase Age</button>
    </>
  );
};
export default Box;
