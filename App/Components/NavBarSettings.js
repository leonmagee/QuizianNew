import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import NavButton from './NavButton';
//import Variables from '../Styles/Variables';
import DefaultStyles from '../Styles/DefaultStyles';
import { Icon } from 'react-native-elements';

// const styles = StyleSheet.create({
//   menuBar: {
//     backgroundColor: Variables.darkBackground,
//   },
// });

class NavBarSettings extends Component {
  render() {
    const { props } = this;
    return (
      <View style={DefaultStyles.globalNavStyles}>
        <NavButton
          handleClick={() => props.startQuiz()}
          buttonText="NEW GAME"
          iconCode="play-circle"
          iconType="font-awesome-5"
        />
        <NavButton
          handleClick={() => props.goToStats()}
          buttonText="STATS"
          iconCode="chart-bar"
          iconType="font-awesome-5"
        />
        <NavButton
          handleClick={() => props.goToCredits()}
          buttonText="CREDITS"
          iconCode="users"
          iconType="font-awesome-5"
        />
        <NavButton
          handleClick={() => props.goToHome()}
          buttonText="HOME"
          iconCode="home"
          iconType="font-awesome-5"
        />
      </View>
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
