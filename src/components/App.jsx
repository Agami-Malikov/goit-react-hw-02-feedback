import { Component } from 'react';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    const result = Math.round((good / total) * 100);

    return result;
  };

  leaveVote = propName => {
    this.setState(prevState => {
      const value = prevState[propName];
      return {
        [propName]: value + 1,
      };
    });
  };

  render() {
    const {
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      leaveVote,
    } = this;

    return (
      <div>
        <Feedback
          state={state}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          leaveVote={leaveVote}
        />
      </div>
    );
  }
}

export default App;
