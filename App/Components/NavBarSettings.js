import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import MenuBar_Wrap from './MenuBar_Wrap';
import Button_BeginQuiz from './Button_BeginQuiz';
import Button_HomePage from './Button_HomePage';
import Button_Credits from './Button_Credits';
import Button_Stats from './Button_Stats';

class NavBarSettings extends Component {
  render() {
    const { props } = this;
    return (
      <MenuBar_Wrap>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => props.startQuiz()}>
          <Button_BeginQuiz />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => props.goToStats()}>
          <Button_Stats />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => props.goToCredits()}>
          <Button_Credits />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => props.goToHome()}>
          <Button_HomePage />
        </TouchableHighlight>
      </MenuBar_Wrap>
    );
  }
}

const mapActionsToProps = dispatch => ({
  startQuiz() {
    dispatch({ type: 'START_QUIZ' });
  },
  goToHome() {
    dispatch({ type: 'QUIZ_RESET' });
  },
  goToCredits() {
    dispatch({ type: 'CREDITS_PAGE' });
  },
  goToStats() {
    dispatch({ type: 'STATS_PAGE' });
  },
});

module.exports = connect(null, mapActionsToProps)(NavBarSettings);
