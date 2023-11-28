import { Component } from 'react';
import { FeedbackWrapper } from './Feedback.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const Button = ({ onUpdate, value }) => {
  return <button onClick={onUpdate}>{value}</button>;
};

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    // const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback();
    // const positive = this.countPositiveFeedbackPercentage();

    return (
      <FeedbackWrapper>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </FeedbackWrapper>
    );
  }
}
