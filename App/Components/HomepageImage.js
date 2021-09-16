import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { vw } from '../Utils/helper';
import { QuizWrap } from './QuizWrap';
import Stats from './Stats';
import Credits from './Credits';
import Settings from './Settings';
import MenuBar_Wrap from './MenuBar_Wrap';
import Button_BeginQuiz from './Button_BeginQuiz';
import Button_Stats from './Button_Stats';
import Button_Credits from './Button_Credits';
import Button_Settings from './Button_Settings';
import variables from '../Styles/Variables';
/**
 * @todo remove this
 */

let { width, height } = Dimensions.get('window');
height -= 85; // make space for bottom menu bar

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //width: null, // allows centering of content within image - otherwise image width is imported
    //height: null,
  },
  mainOuterWrap: {
    flex: 1,
    width,
  },
  homeWrapOuter: {
    flex: 1,
  },
  homeWrap: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  homeTextWrap: {
    position: 'absolute',
    //zIndex: 333,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  homeText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 25 * vw,
    fontWeight: '400',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    fontFamily: 'Lalezar-Regular',
  },
});

class HomepageImage extends Component {
  render() {
    let MainComponent = <View />;

    const { props } = this;

    if (props.creditsPage) {
      MainComponent = <Credits />;
    } else if (props.statsPage) {
      MainComponent = <Stats />;
    } else if (props.settingsPage) {
      MainComponent = <Settings />;
    } else if (props.quizStarted) {
      MainComponent = (
        <LinearGradient colors={variables.gradient} style={{ flex: 1 }}>
          <QuizWrap />
        </LinearGradient>
      );
    } else {
      MainComponent = (
        <View style={styles.homeWrapOuter}>
          <View style={styles.homeWrap}>
            <Image
              source={require('../Assets/Images/home-image-books.png')}
              style={styles.imageContainer}
            />
            <View style={[styles.homeTextWrap, { width, height }]}>
              <Text style={styles.homeText}>Quizian</Text>
            </View>
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
                onPress={() => props.goToSettings()}>
                <Button_Settings />
              </TouchableHighlight>
            </MenuBar_Wrap>
          </View>
        </View>
      );
    }

    return <View style={styles.mainOuterWrap}>{MainComponent}</View>;
  }
}

const mapStateToProps = state => ({
  quizStarted: state.quizStarted,
  statsPage: state.statsPage,
  creditsPage: state.creditsPage,
  settingsPage: state.settingsPage,
});

const mapActionsToProps = dispatch => ({
  startQuiz() {
    dispatch({ type: 'START_QUIZ' });
  },
  goToStats() {
    dispatch({ type: 'STATS_PAGE' });
  },
  goToCredits() {
    dispatch({ type: 'CREDITS_PAGE' });
  },
  goToSettings() {
    dispatch({ type: 'SETTINGS_PAGE' });
  },
});

module.exports = connect(mapStateToProps, mapActionsToProps)(HomepageImage);
