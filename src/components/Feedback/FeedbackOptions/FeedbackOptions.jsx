import PropTypes from 'prop-types'
import s from '../feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 
  return (
    <div className={s.buttons}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};