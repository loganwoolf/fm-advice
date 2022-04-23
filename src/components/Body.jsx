const Body = (props) => {
  const { quoteNum, quoteBody } = props;

  return (
    <>
      <h2>
        Advice #<span>{quoteNum}</span>
      </h2>
      <p>"{quoteBody}"</p>
    </>
  );
};

export default Body;
