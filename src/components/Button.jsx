import { ReactComponent as Icon } from "../images/icon-dice.svg";

const Button = (props) => {
  const { getQuote } = props;

  const addHoverEffect = (e) => {
    e.target.classList.add("button-hover");
  };
  const removeHoverEffect = (e) => {
    e.target.classList.remove("button-hover");
  };
  const handleClick = (e) => {
    getQuote();
  };

  return (
    <button
      onMouseEnter={addHoverEffect}
      onMouseLeave={removeHoverEffect}
      onClick={handleClick}
    >
      <Icon />
    </button>
  );
};

export default Button;
