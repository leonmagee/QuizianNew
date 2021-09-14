import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, Animated } from 'react-native';
import styles from '../Styles/DefaultStyles';
import quizData from '../Data/quizData';
import { Questions } from './Questions';
import QuizButton from './QuizButton';
import variables from '../Styles/Variables';
import {
  shuffleArray,
  intermediateArray,
  setAsyncIndex,
} from '../Utils/helper';

const animatedOpacity = new Animated.Value(0);

class _Quiz extends Component {
  constructor() {
    super();

    this.state = {
      timerValue: 15,
    };
  }

  componentDidMount() {
    this.props.getData(this.props.currentCat, this.props.catIndex[0]);
    this.fadeInQuiz();
    this.startTimerInit();
  }

  countTime() {
    if (!this.props.answerSubmitted) {
      this.incrementTimer();
      if (this.state.timerValue > 0) {
        this.startTimer();
      } else {
        this.saveIndexData();
        this.saveAnswerData(false);
        this.props.timerExpires();
      }
    }
  }

  incrementTimer() {
    this.setState({
      timerValue: this.state.timerValue - 1,
    });
  }

  startTimerInit() {
    this.clearTheTimer();
    global_timeout_wrap = setTimeout(() => {
      this.startTimer();
    }, 400);
  }

  startTimer() {
    global_timeout = setTimeout(() => this.countTime(), 1000);
  }

  /**
   * @todo timer is not resetting with reset button?
   */
  clearTheTimer() {
    if (typeof global_timeout !== 'undefined') {
      clearTimeout(global_timeout);
    }
    if (typeof global_timeout_wrap !== 'undefined') {
      clearTimeout(global_timeout_wrap);
    }
  }

  fadeInQuiz() {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  fadeOutQuiz() {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  nextQuestion(question_number) {
    this.fadeOutQuiz();
    setTimeout(() => this.goToNextQuestion(question_number), 600);
  }

  goToNextQuestion(question_number) {
    this.clearTheTimer();
    if (this.props.currentQuestion + 2 === this.props.numberQuestions) {
      this.props.finalQuestion();
    }
    if (this.props.currentQuestion + 1 === this.props.numberQuestions) {
      this.props.goToResults();
    } else {
      this.props.chooseCat();
      // @todo do I still need the following???
      this.props.goToNextQuestion(question_number);
      this.fadeInQuiz();
      this.startTimerInit();
    }
  }

  resetQuiz() {
    this.clearTheTimer();
    this.props.getData(this.props.currentCat, this.props.catIndex[0]);
    this.props.resetQuizClicked();
    this.fadeInQuiz();
  }

  saveIndexData() {
    /**
     * Handle stored index data
     */
    const cat_array = this.props.catIndex;
    cat_array.shift();

    const cat = this.props.currentCat;

    if (cat === 'history') {
      if (cat_array.length > 0) {
        this.props.answerHistoryQuestion(cat_array);
      } else {
        const cat_keys = intermediateArray(quizData[0].history.length);
        this.props.answerHistoryQuestion(cat_keys);
      }
    } else if (cat === 'sports') {
      if (cat_array.length > 0) {
        this.props.answerSportsQuestion(cat_array);
      } else {
        const cat_keys = intermediateArray(quizData[0].sports.length);
        this.props.answerSportsQuestion(cat_keys);
      }
    } else if (cat === 'music') {
      if (cat_array.length > 0) {
        // @todo not working right???
        this.props.answerMusicQuestion(cat_array);
      } else {
        const cat_keys = intermediateArray(quizData[0].music.length);
        this.props.answerMusicQuestion(cat_keys);
      }
    } else if (cat === 'entertainment') {
      if (cat_array.length > 0) {
        this.props.answerEntertainmentQuestion(cat_array);
      } else {
        const cat_keys = intermediateArray(quizData[0].entertainment.length);
        this.props.answerEntertainmentQuestion(cat_keys);
      }
    } else if (cat === 'geography') {
      if (cat_array.length > 0) {
        this.props.answerGeographyQuestion(cat_array);
      } else {
        const cat_keys = intermediateArray(quizData[0].geography.length);
        this.props.answerGeographyQuestion(cat_keys);
      }
    }
  }

  saveAnswerData(correct) {
    const cat = this.props.currentCat;
    if (correct) {
      var storageKey = `${cat}_true`;
    } else {
      var storageKey = `${cat}_false`;
    }

    /**
     * @todo this concatenates, so 1 + 1 = 11, I need to convert from numbers to strings,
     * @todo and back... or maybe use arrays and strinify?
     */
    AsyncStorage.getItem(`@QuestionAnswers:${storageKey}`)
      .then(value => {
        if (value) {
          const valueNew = Number(value) + 1;
          const valueNewString = valueNew.toString();
          AsyncStorage.setItem(
            `@QuestionAnswers:${storageKey}`,
            valueNewString,
          );
        } else {
          AsyncStorage.setItem(`@QuestionAnswers:${storageKey}`, '1');
        }
      })
      .done();
  }

  answerChosen(correct, key) {
    this.saveIndexData();

    this.saveAnswerData(correct);

    /**
     * A choice was made
     */
    this.props.answerButtonClicked();
    /**
     * Set Chosen Answer Key
     */
    this.props.answerButtonKey(key);
    /**
     * Was it correct?
     */
    if (correct) {
      this.props.correctAnswerClicked();
    } else {
      this.props.incorrectAnswerClicked();
    }
  }

  render() {
    if (this.props.answerSubmitted) {
      var nextQuestionButton = (
        <QuizButton
          handleClick={() => this.nextQuestion(1)}
          buttonText={this.props.nextText}
        />
      );
    } else {
      var nextQuestionButton = (
        <QuizButton disabled buttonText={this.props.nextText} />
      );
    }

    if (this.props.getQuestions) {
      var currentQuiz = (
        <Questions
          arrayData={this.props.getQuestions}
          answerChosen={(correct, key) => this.answerChosen(correct, key)}
          answerSubmitted={this.props.answerSubmitted}
          correctIncorrectString={this.props.answerResultString}
          answerKey={this.props.answerKey}
        />
      );
    }

    return (
      <LinearGradient colors={variables.gradient} style={styles.outerWrap}>
        <Animated.View
          style={[styles.animatedQuizWrap, { opacity: animatedOpacity }]}>
          <View style={styles.topBar}>
            <View style={styles.topBarDetails}>
              <Text style={styles.topBarDetailsText}>
                Question {this.props.currentQuestion + 1} of{' '}
                {this.props.numberQuestions}
              </Text>
              <Text style={styles.topBarDetailsText}>
                Correct: {this.props.correctAnswer} - Incorrect:{' '}
                {this.props.falseAnswer}
              </Text>
            </View>
            <View style={styles.topBarTimer}>
              <Text style={styles.topBarTimerText}>
                {this.state.timerValue}
              </Text>
            </View>
          </View>

          <View style={styles.quizWrap}>
            <View style={styles.catHeaderWrap}>
              <Text style={styles.catHeaderText}>{this.props.catText}</Text>
            </View>
            {currentQuiz}
          </View>

          <View style={styles.menuBar}>
            <QuizButton
              handleClick={() => this.resetQuiz()}
              buttonText="RESET"
            />
            {nextQuestionButton}
          </View>
        </Animated.View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
  currentQuestion: state.currentQuestion,
  numberQuestions: state.numberQuestions,
  correctAnswer: state.correctAnswer,
  falseAnswer: state.falseAnswer,
  answerKey: state.answerKey,
  answerSubmitted: state.answerSubmitted,
  answerResultString: state.answerResultString,
  getQuestions: state.getQuestions,
  resetQuiz: state.resetQuiz,
  nextText: state.nextText,
  catIndex: state.catIndex,
  currentCat: state.currentCat,
  catText: state.catText,
});

const mapActionsToProps = dispatch => ({
  goToNextQuestion(currentQuestion) {
    dispatch({ type: 'NEXT_QUESTION', payload: currentQuestion });
  },
  answerButtonClicked() {
    dispatch({ type: 'ANSWER_SUBMITTED' });
  },
  answerButtonKey(key) {
    dispatch({ type: 'ANSWER_KEY', payload: key });
  },
  correctAnswerClicked() {
    dispatch({ type: 'CORRECT_ANSWER' });
  },
  incorrectAnswerClicked() {
    dispatch({ type: 'INCORRECT_ANSWER' });
  },
  finalQuestion() {
    dispatch({ type: 'FINAL_QUESTION' });
  },
  goToResults() {
    dispatch({ type: 'QUIZ_RESULTS' });
  },
  questionDisplayed() {
    dispatch({ type: 'QUESTION_DISPLAYED' });
  },
  resetQuizClicked() {
    dispatch({ type: 'QUIZ_RESET' });
  },
  timerExpires() {
    dispatch({ type: 'TIMER_EXPIRES' });
  },
  answerHistoryQuestion(array) {
    const key = 'history';
    setAsyncIndex(key, array);
    dispatch({ type: 'HISTORY_QUESTION', payload: array });
  },
  answerSportsQuestion(array) {
    const key = 'sports';
    setAsyncIndex(key, array);
    dispatch({ type: 'SPORTS_QUESTION', payload: array });
  },
  answerEntertainmentQuestion(array) {
    const key = 'entertainment';
    setAsyncIndex(key, array);
    dispatch({ type: 'ENTERTAINMENT_QUESTION', payload: array });
  },
  answerMusicQuestion(array) {
    const key = 'music';
    setAsyncIndex(key, array);
    dispatch({ type: 'MUSIC_QUESTION', payload: array });
  },
  answerGeographyQuestion(array) {
    const key = 'geography';
    setAsyncIndex(key, array);
    dispatch({ type: 'GEOGRAPHY_QUESTION', payload: array });
  },
  chooseCat() {
    dispatch({ type: 'NEW_CAT' });
  },
  getData(cat, index) {
    dispatch({ type: 'START_DATA' });

    const question = [];

    let quiz_data = false;
    if (cat === 'history') {
      quiz_data = quizData[0].history;
    } else if (cat === 'sports') {
      quiz_data = quizData[0].sports;
    } else if (cat === 'music') {
      quiz_data = quizData[0].music;
    } else if (cat === 'entertainment') {
      quiz_data = quizData[0].entertainment;
    } else if (cat === 'geography') {
      quiz_data = quizData[0].geography;
    }

    const trivia_question = quiz_data[index];
    const answers = [];
    answers.push({ answer: trivia_question.c, correct: true });
    trivia_question.i.map(incorrect_answer => {
      answers.push({ answer: incorrect_answer, correct: false });
    });
    question.push({
      question: trivia_question.q,
      answers: shuffleArray(answers),
    });

    dispatch({ type: 'DATA_AVAILABLE', payload: question[0] });
  },
});

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz);
