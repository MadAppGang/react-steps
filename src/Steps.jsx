import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Steps = function (props) {
  const { children, initialStep, onComplete } = props;
  const [step, setStep] = useState(initialStep);
  const [results, setResults] = useState([]);
  const [completed, setCompleted] = useState(false);

  if (!children.length) {
    throw Error('Seems like you forgot to specify steps.');
  }

  const handleStepCompletion = function (result) {
    const stepsCount = children.length;
    const nextResults = results.concat(result);

    if (completed) {
      return;
    }

    if (step >= stepsCount -1) {
      onComplete(nextResults);
      setCompleted(true);
      return;
    }

    setResults(nextResults);
    setStep(step + 1);
  };

  const handleGoBackRequest = function () {
    if (completed) {
      return;
    }

    const prevStep = step - 1;
    const previousResults = results.slice(0, -1);
    
    if (prevStep < 0) {
      return;
    }

    setResults(previousResults);
    setStep(prevStep);
  };

  const child = children[step];

  return React.cloneElement(child, {
    done: handleStepCompletion,
    goBack: handleGoBackRequest,
  });
};

Steps.propTypes = {
  initialStep: PropTypes.number,
  onComplete: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Steps.defaultProps = {
  initialStep: 0,
  onComplete: () => {},
};

export default Steps;
