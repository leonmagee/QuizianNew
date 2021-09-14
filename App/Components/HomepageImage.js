import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { vw } from '../Utils/helper';
import { QuizWrap } from './QuizWrap';
import Stats from './Stats';
import Credits from './Credits';
import Settings from './Settings';
import StartQuizButton from './StartQuizButton';
import variables from '../Styles/Variables';
import DefaultStyles from '../Styles/DefaultStyles';
/**
 * @todo remove this
 */

let { width, height } = Dimensions.get('window');
height -= 50; // make space for bottom menu bar

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
    zIndex: 333,
    alignItems: 'center',
    justifyContent: 'center',
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
  menuText: {
    fontSize: 27,
    fontFamily: 'Lalezar-Regular',
    fontWeight: '400',
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  menuBar: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    bottom: 0,
    width,
  },
});

class HomepageImage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     started: false,
  //   };
  // }

  render() {
    /**
     * Insert Credits page here...
     */

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
            <View style={[DefaultStyles.globalNavStyles, styles.menuBar]}>
              <StartQuizButton
                handleClick={() => props.startQuiz()}
                buttonText="NEW  GAME"
              />
              <StartQuizButton
                handleClick={() => props.goToStats()}
                buttonText="STATS"
              />
              <StartQuizButton
                handleClick={() => props.goToCredits()}
                buttonText="CREDITS"
              />
              <StartQuizButton
                handleClick={() => props.goToSettings()}
                buttonText="SETTINGS"
              />
            </View>
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
