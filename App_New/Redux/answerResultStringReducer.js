import React from 'react';
import { Text } from 'react-native';
import styles from '../Styles/DefaultStyles';
import variables from '../Styles/Variables';

import { CORRECT_ANSWER, INCORRECT_ANSWER, TIMER_EXPIRES } from './actions';

/**
 * answerResultStringReducer
 * Returns the text string for correct or incorrect answers
 */
export const answerResultStringReducer = (state = '', action) => {
  const s = styles.correctIncorrectText;
  switch (action.type) {
    case CORRECT_ANSWER:
      return <Text style={[s, { color: variables.brandSecond }]}>CORRECT</Text>;
    case INCORRECT_ANSWER:
      return (
        <Text style={[s, { color: variables.brandPrimary }]}>INCORRECT</Text>
      );
    case TIMER_EXPIRES:
      return (
        <Text style={[s, { color: variables.brandPrimary }]}>TIMES UP!</Text>
      );
    default:
      return <Text />;
  }
};
