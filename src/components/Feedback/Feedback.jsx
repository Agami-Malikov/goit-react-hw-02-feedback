import PropTypes from 'prop-types';
import s from './feedback.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

const Feedback = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  leaveVote,
}) => {
  const { good, neutral, bad } = state;

  const total = countTotalFeedback();

  const positive = countPositiveFeedbackPercentage();

  return (
    <div className={s.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={leaveVote}
        />
      </Section>

      <Section title="Statistics">
        <div className={s.stats}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          )}
        </div>
      </Section>
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  leaveVote: PropTypes.func.isRequired,
};
