import React from "react"
import PropTypes from "prop-types";

import { Button } from "./FeedbackOptions.styled";

    
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (<div>
    {options.map(option => {
      return (<Button
        key={option}
        name={option}
        onClick={e => onLeaveFeedback(e.currentTarget.name)}>
        {option}
      </Button>)
    })}
  </div>);
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;