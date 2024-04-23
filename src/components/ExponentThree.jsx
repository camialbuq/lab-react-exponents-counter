const ExponentThree = (props) => {
  const { num } = props;
  //this number needs to come from parent App.js and we lifted the state from counter to parent.
  //counter and exponent components are in same level, we cant pass horizontally

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}³</p>
      <p className="exponent-result">
        {num} * {num} * {num} = <span className="total">{num ** 3}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
