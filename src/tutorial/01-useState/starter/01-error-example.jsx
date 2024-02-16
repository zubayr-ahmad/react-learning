const ErrorExample = () => {
  let count = 0;
  const count_inc = () => {
    count += 1;
    console.log(count);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={count_inc} className="btn">Counter</button>
    </div>
  );
};

export default ErrorExample;
