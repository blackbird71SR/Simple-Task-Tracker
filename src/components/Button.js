import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='btn'
      style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Hello',
  color: 'black',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
