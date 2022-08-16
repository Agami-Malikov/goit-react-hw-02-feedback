import s from './feedback.module.css';
import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    const result = Math.round((good / total) * 100);

    return result;
  }

  leaveVote = propName => {
    this.setState(prevState => {
      const value = prevState[propName];
      return {
        [propName]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveVote}
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
  }
}

export default Feedback;
