import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Quiz } from './Quiz';
import { Results } from './Results';
import Stats from './Stats';
import { Categories } from './Categories';
import { CategoriesChoose } from './CategoriesChoose';
import { intermediateArray } from '../Utils/helper';
import quizData from '../Data/quizData';
import styles from '../Styles/DefaultStyles';

class _QuizWrap extends Component {
  constructor() {
    super();

    this.state = {
      randomQuestionMode: false,
    };
  }

  componentDidMount() {
    const { props } = this;

    const dataInitArray = [
      {
        data_key: 'sports',
        array_length: quizData[0].sports.length,
        redux_action: props.sportsIndexInit,
      },
      {
        data_key: 'history',
        array_length: quizData[0].history.length,
        redux_action: props.historyIndexInit,
      },
      {
        data_key: 'entertainment',
        array_length: quizData[0].entertainment.length,
        redux_action: props.entertainmentIndexInit,
      },
      {
        data_key: 'music',
        array_length: quizData[0].music.length,
        redux_action: props.musicIndexInit,
      },
      {
        data_key: 'geography',
        array_length: quizData[0].geography.length,
        redux_action: props.geographyIndexInit,
      },
    ];

    AsyncStorage.getItem('@RandomQuestionMode')
      .then(setting => {
        if (setting === 'true') {
          this.setState({
            randomQuestionMode: true,
          });
        }
      })
      .done();

    dataInitArray.map(item => {
      AsyncStorage.getItem(`@QuestionIndex:${item.data_key}`)
        .then(value => {
          if (value) {
            const parsedData = JSON.parse(value);
            item.redux_action(parsedData);
          } else {
            const cat_keys = intermediateArray(item.array_length);
            const data = JSON.stringify(cat_keys);
            AsyncStorage.setItem(`@QuestionIndex:${item.data_key}`, data);
            item.redux_action(cat_keys);
          }
        })
        .done();
    });
  }

  render() {
    const { props } = this;
    let mainComponent = <View />;
    if (props.statsPage) {
      mainComponent = <Stats />;
    } else if (props.quizResults) {
      mainComponent = <Results />;
    } else if (props.chooseCat) {
      if (this.state.randomQuestionMode) {
        mainComponent = <Categories />;
      } else {
        mainComponent = <CategoriesChoose />;
      }
    } else {
      mainComponent = <Quiz />;
    }
    return <View style={styles.outerWrapMain}>{mainComponent}</View>;
  }
}

const mapStateToProps = state => ({
  statsPage: state.statsPage,
  quizResults: state.quizResults,
  chooseCat: state.chooseCat,
});

const mapActionsToProps = dispatch => ({
  sportsIndexInit(array) {
    dispatch({ type: 'SPORTS_QUESTION', payload: array });
  },
  musicIndexInit(array) {
    dispatch({ type: 'MUSIC_QUESTION', payload: array });
  },
  historyIndexInit(array) {
    dispatch({ type: 'HISTORY_QUESTION', payload: array });
  },
  geographyIndexInit(array) {
    dispatch({ type: 'GEOGRAPHY_QUESTION', payload: array });
  },
  entertainmentIndexInit(array) {
    dispatch({ type: 'ENTERTAINMENT_QUESTION', payload: array });
  },
});

export const QuizWrap = connect(mapStateToProps, mapActionsToProps)(_QuizWrap);
