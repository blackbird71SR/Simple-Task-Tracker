import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className='btn' style={{ backgroundColor: props.color }}>
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
};

export default Button;
