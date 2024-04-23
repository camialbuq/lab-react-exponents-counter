//here the numbers are hard coded, we will need to pass them as props

const ExponentTwo = (props) => {
  const { num } = props;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}²</p>
      <p className="exponent-result">
        {num} * {num} = <span className="total">{num ** 2}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
