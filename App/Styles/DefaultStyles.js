import { Dimensions, StyleSheet } from 'react-native';
import variables from './Variables';
import { vw } from '../Utils/helper';

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.9;
const questionFontSize = vw * 6;
const questionHeight = vw * 40;
const answerFontSize = vw * 4;

const defaultStyles = StyleSheet.create({
  outerWrapMain: {
    flex: 1,
  },
  outerWrap: {
    flex: 1,
  },
  animatedQuizWrap: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 5,
  },
  topBarTimer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 25,
    height: 80,
    width: 120,
    flexDirection: 'row',
  },
  topBarTimerText: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  topBarDetails: {
    height: 80,
    justifyContent: 'flex-end',
    paddingLeft: 15,
  },
  topBarDetailsText: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Lalezar',
    backgroundColor: 'transparent',
  },
  correctIncorrectWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  correctIncorrectText: {
    fontWeight: 'bold',
    fontFamily: 'Lalezar',
    fontSize: 50,
    backgroundColor: 'transparent',
    textShadowColor: '#F7F7F7',
    textShadowOffset: { width: 3, height: 3 },
  },
  quizWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  questionWrap: {
    backgroundColor: '#FCFCFC',
    marginTop: 5,
    marginBottom: 11,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    minHeight: questionHeight,
    justifyContent: 'center',
    width: buttonWidth,
    shadowColor: '#CCC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: questionFontSize,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Lalezar',
  },
  answerWrap: {
    backgroundColor: '#FCFCFC',
    marginVertical: 11,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: buttonWidth,
    shadowColor: '#CCC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  answerCorrect: {
    backgroundColor: variables.brandSecond,
    borderColor: variables.brandSecond,
  },
  answerIncorrect: {
    backgroundColor: variables.brandPrimary,
    borderColor: variables.brandPrimary,
  },
  answerQuestionGray: {
    backgroundColor: '#DDD',
  },
  answerText: {
    fontWeight: 'bold',
    fontSize: answerFontSize,
    color: '#222',
    textAlign: 'center',
    fontFamily: 'Lalezar',
  },
  answerCorrectText: {
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  answerIncorrectText: {
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  nextButton: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: 200,
    backgroundColor: variables.brandThird,
    alignItems: 'center',
  },
  nextButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF',
  },
  quizResultsWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizResultsHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  quizResultsTextWrap: {
    paddingBottom: 13,
  },
  quizResultsText: {
    textAlign: 'center',
    padding: 3,
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
    backgroundColor: 'transparent',
  },
  pieChartWrap: {
    paddingVertical: 30,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  menuBar: {
    height: 50,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoriesWrap: {
    flex: 1,
    flexWrap: 'wrap',
    //flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  categoriesBox: {
    alignItems: 'center',
    //flex: 0 1,
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    //flexShrink: 1,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    paddingTop: 10,
    paddingBottom: 5,
  },
  categoriesText: {
    color: '#FFF',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  catColorOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    opacity: 0,
  },
  catHeaderWrap: {
    backgroundColor: 'transparent',
  },
  catHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Lalezar',
  },
  globalNavStyles: {
    //height: 60,
    //paddingTop: 10,
    //paddingBottom: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
    paddingTop: 13,
    height: 85,
  },
});

module.exports = defaultStyles;
