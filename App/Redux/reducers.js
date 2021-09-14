import { combineReducers } from 'redux';

/**
 * Import Reducers
 */
import { numberQuestionsReducer } from './numberQuestionsReducer';
import { currentQuestionReducer } from './currentQuestionReducer';
import { correctAnswerReducer } from './correctAnswerReducer';
import { falseAnswerReducer } from './falseAnswerReducer';
import { answerResultStringReducer } from './answerResultStringReducer';
import { answerSubmittedReducer } from './answerSubmittedReducer';
import { answerKeyReducer } from './answerKeyReducer';
import { quizResultsReducer } from './quizResultsReducer';
import { getQuestionsReducer } from './getQuestionsReducer';
import { nextTextReducer } from './nextTextReducer';
import { historyIndexReducer } from './historyIndexReducer';
import { sportsIndexReducer } from './sportsIndexReducer';
import { geographyIndexReducer } from './geographyIndexReducer';
import { musicIndexReducer } from './musicIndexReducer';
import { entertainmentIndexReducer } from './entertainmentIndexReducer';
import { currentCatReducer } from './currentCatReducer';
import { chooseCatReducer } from './chooseCatReducer';
import { catIndexReducer } from './catIndexReducer';
import { catTextReducer } from './catTextReducer';
import { quizStartedReducer } from './quizStartedReducer';
import { statsPageReducer } from './statsPageReducer';
import { creditsPageReducer } from './creditsPageReducer';
import { settingsPageReducer } from './settingsPageReducer';

/**
 * Combine Reducers
 */
export const reducer = combineReducers({
  numberQuestions: numberQuestionsReducer,
  currentQuestion: currentQuestionReducer,
  correctAnswer: correctAnswerReducer,
  falseAnswer: falseAnswerReducer,
  answerResultString: answerResultStringReducer,
  answerSubmitted: answerSubmittedReducer,
  answerKey: answerKeyReducer,
  quizResults: quizResultsReducer,
  getQuestions: getQuestionsReducer,
  nextText: nextTextReducer,
  historyIndex: historyIndexReducer,
  sportsIndex: sportsIndexReducer,
  geographyIndex: geographyIndexReducer,
  musicIndex: musicIndexReducer,
  entertainmentIndex: entertainmentIndexReducer,
  currentCat: currentCatReducer,
  chooseCat: chooseCatReducer,
  catIndex: catIndexReducer,
  catText: catTextReducer,
  quizStarted: quizStartedReducer,
  statsPage: statsPageReducer,
  creditsPage: creditsPageReducer,
  settingsPage: settingsPageReducer,
});
