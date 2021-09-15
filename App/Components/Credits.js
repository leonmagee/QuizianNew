import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import StartQuizButton from './StartQuizButton';
import { shuffleArray } from '../Utils/helper';
import variables from '../Styles/Variables';
import DefaultStyles from '../Styles/DefaultStyles';

let { width, height } = Dimensions.get('window');
height -= 50; // make space for bottom menu bar

const styles = StyleSheet.create({
  mainOuterWrapCredits: {
    flex: 1,
  },
  homeWrapOuter: {
    flex: 1,
  },
  homeWrap: {
    flex: 1,
    padding: 9,
    flexDirection: 'row',
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
    fontSize: 30,
    // fontWeight: 'bold',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    fontFamily: 'Lalezar-Regular',
    fontWeight: '400',
  },
  homeText2: {
    fontSize: 23,
    marginTop: 10,
  },
  homeText3: {
    fontSize: 23,
  },
  gridItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  questionText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#FFF',
    opacity: 0,
  },
  menuText: {
    fontSize: 27,
    fontFamily: 'Lalezar-Regular',
    fontWeight: '400',
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  // menuBar: {
  //   backgroundColor: 'rgba(0,0,0,0.1)',
  // },
});

class Credits extends Component {
  constructor(props) {
    super(props);

    const num_horizontal = 3; // 6
    const num_vertical = 6; // 10
    const total_grid_items = num_horizontal * num_vertical;
    const grid_array = [];
    for (i = 0; i < total_grid_items; i++) {
      grid_array.push(i);
    }
    const shuffled_grid_array = shuffleArray(grid_array);
    const item_width = (width - 2) / num_horizontal - 8;
    const item_height = (height - 2) / num_vertical - 8;

    const grid_styles_array = [];
    for (i = 0; i < total_grid_items; i++) {
      const fontSizeArray = [50, 60, 70, 80, 90, 100];
      const fontSizeItem =
        fontSizeArray[Math.floor(Math.random() * fontSizeArray.length)];
      const flexPosArray = ['flex-start', 'flex-end', 'center'];
      const verticalPos =
        flexPosArray[Math.floor(Math.random() * flexPosArray.length)];
      const horizontalPos =
        flexPosArray[Math.floor(Math.random() * flexPosArray.length)];

      grid_styles_array.push({
        opacity: 0,
        fontSize: fontSizeItem,
        justifyContent: verticalPos,
        alignItems: horizontalPos,
      });
    }

    this.state = {
      // started: false,
      grid_array,
      shuffled_grid_array,
      grid_styles_array,
      item_width,
      item_height,
      currentTimeout: null,
    };
    this.animatedValue = [];
    this.animatedValueColor = [];
    this.state.grid_array.forEach(item => {
      this.animatedValue[item] = new Animated.Value(0);
    });
  }

  // UNSAFE_componentWillUnmount() {
  //   clearTimeout(this.state.currentTimeout);
  // }

  // UNSAFE_componentWillMount() {
  //   this.animatedValue = [];
  //   this.animatedValueColor = [];
  //   this.state.grid_array.forEach(item => {
  //     this.animatedValue[item] = new Animated.Value(0);
  //   });
  // }

  questionOpacityRecursive(array, length, i, old_i = null, shuffled) {
    if (i < length) {
      this.state.currentTimeout = setTimeout(() => {
        Animated.timing(this.animatedValue[i], {
          toValue: 0.7,
          duration: 400,
          useNativeDriver: false,
        }).start();

        array[shuffled[i]].opacity = this.animatedValue[i];

        if (old_i != null) {
          Animated.timing(this.animatedValue[old_i], {
            toValue: 0.5,
            duration: 400,
            useNativeDriver: false,
          }).start();

          array[shuffled[old_i]].opacity = this.animatedValue[old_i];
        }

        this.setState({
          background_array: array,
        });
        const oldster = i;
        i++;
        this.questionOpacityRecursive(array, length, i, oldster, shuffled);
      }, 600);
    } else {
      Animated.timing(this.animatedValue[old_i], {
        toValue: 0.5,
        duration: 400,
        useNativeDriver: false,
      }).start();

      array[shuffled[old_i]].opacity = this.animatedValue[old_i];
    }
  }

  componentDidMount() {
    const new_styles_array = this.state.grid_styles_array;

    const i = 0;
    this.questionOpacityRecursive(
      new_styles_array,
      new_styles_array.length,
      i,
      null,
      this.state.shuffled_grid_array,
    );
  }

  render() {
    const grid = this.state.grid_array.map((item, key) => {
      const stylesView = {
        justifyContent: this.state.grid_styles_array[key].justifyContent,
        alignItems: this.state.grid_styles_array[key].alignItems,
      };

      const stylesText = {
        opacity: this.state.grid_styles_array[key].opacity,
        fontSize: this.state.grid_styles_array[key].fontSize,
      };

      return (
        <Animated.View
          style={[
            styles.gridItem,
            {
              width: this.state.item_width,
              height: this.state.item_height,
            },
            stylesView,
          ]}
          key={key}>
          <Animated.Text style={[styles.questionText, stylesText]}>
            ?
          </Animated.Text>
        </Animated.View>
      );
    });

    const MainComponent = (
      <LinearGradient colors={variables.gradient} style={{ flex: 1 }}>
        <View style={styles.homeWrapOuter}>
          <View style={styles.homeWrap}>
            <View style={[styles.homeTextWrap, { width, height }]}>
              <Text style={styles.homeText}>Developed by Levon.io</Text>
              <Text style={[styles.homeText, styles.homeText2]}>
                Questions by Leon Magee
              </Text>
              <Text style={[styles.homeText, styles.homeText3]}>
                and Maryana Avagyan
              </Text>
            </View>
            {grid}
          </View>
          <View style={DefaultStyles.globalNavStyles}>
            {/* add button for Home (this is no longer home) */}
            <StartQuizButton
              handleClick={() => {
                clearTimeout(this.state.currentTimeout);
                return this.props.startQuiz();
              }}
              buttonText="NEW GAME"
              iconCode="play-circle"
              iconType="font-awesome-5"
            />
            <StartQuizButton
              handleClick={() => {
                clearTimeout(this.state.currentTimeout);
                return this.props.goToStats();
              }}
              buttonText="STATS"
              iconCode="chart-bar"
              iconType="font-awesome-5"
            />
            <StartQuizButton
              handleClick={() => {
                clearTimeout(this.state.currentTimeout);
                return this.props.goToSettings();
              }}
              buttonText="SETTINGS"
              iconCode="sliders-h"
              iconType="font-awesome-5"
            />
            <StartQuizButton
              handleClick={() => {
                clearTimeout(this.state.currentTimeout);
                return this.props.goToHome();
              }}
              buttonText="HOME"
              iconCode="home"
              iconType="font-awesome-5"
            />
          </View>
        </View>
      </LinearGradient>
    );

    return <View style={styles.mainOuterWrapCredits}>{MainComponent}</View>;
  }
}

const mapStateToProps = state => ({
  // quizStarted: state.quizStarted,
  // statsPage: state.statsPage,
});

const mapActionsToProps = dispatch => ({
  startQuiz() {
    dispatch({ type: 'START_QUIZ' });
  },
  goToStats() {
    dispatch({ type: 'STATS_PAGE' });
  },
  goToSettings() {
    dispatch({ type: 'SETTINGS_PAGE' });
  },
  goToHome() {
    dispatch({ type: 'QUIZ_RESET' });
  },
});

module.exports = connect(mapStateToProps, mapActionsToProps)(Credits);
