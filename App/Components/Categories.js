import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, Dimensions, Animated } from 'react-native';
import styles from '../Styles/DefaultStyles';
import variables from '../Styles/Variables';
import SvgElement from './SvgElement';
import television from '../SVG/television';
import history from '../SVG/history';
import music from '../SVG/music';
import sports from '../SVG/sports';
import geography from '../SVG/geography';
// import StatusBarSizeIOS from 'react-native-status-bar-size'
import { shuffleArray } from '../Utils/helper';

const { width, height } = Dimensions.get('window');
// var height_new = false;

/**
 * This doesn't work here - I should instead pass this through the Quiz Wrap component (top level)? And then maybe
 * save it as a action, and whenever the status bar height changes that can be dispatched as an action and update accordingly?
 * @todo test this by subtracting 20 from the 'height' to see if that actually reduces the app height?
 */
// let status_height = StatusBarSizeIOS.currentHeight;
//
// console.log('so far???', status_height);
// /**
//  * Height should pull from state?
//  */
// if (status_height) {
//     console.log('status height', status_height);
//     height = ( height - status_height );
//     console.log('height new', height);
// }

class _Categories extends Component {
  constructor(props) {
    super(props);
    // let status_height = props.statusBarHeight;
    /**
     *
     */

    // if (!height_new) {
    // if (status_height > 20) {
    //     height_new = ( height - ( status_height - 20 ) );
    // } else {
    //     height_new = height;
    // }
    // }

    this.state = {
      animatedOpacity: [
        new Animated.Value(0), // sports
        new Animated.Value(0), // music
        new Animated.Value(0), // tv&movies
        new Animated.Value(0), // history
        new Animated.Value(0), // geography
      ],
      // numberAnimations: 0,
    };
  }

  componentDidMount() {
    const base_array = [0, 1, 2, 3, 4];
    const shuffle = shuffleArray(base_array);
    // StatusBarSizeIOS.addEventListener('willChange', this._handleStatusBarSizeWillChange);
    setTimeout(() => {
      this.colorOpacity(0, shuffle);
    }, 300);
  }

  colorOpacity(index, shuffle) {
    Animated.timing(this.state.animatedOpacity[shuffle[index]], {
      toValue: 0.2,
      duration: 300,
      useNativeDriver: false,
    }).start(() => this.fadeOpacity(index, shuffle));
  }

  fadeOpacity(index, shuffle) {
    Animated.timing(this.state.animatedOpacity[shuffle[index]], {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      if (index < 4) {
        index += 1;
        setTimeout(() => {
          this.colorOpacity(index, shuffle);
        }, 50);
      } else {
        // this is where you make it blink several times quickly
        setTimeout(() => {
          this.catAnimationFinal(shuffle[index]);
        }, 50);
      }
    });
  }

  catAnimationFinal(index) {
    Animated.timing(this.state.animatedOpacity[index], {
      toValue: 0.2,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      // this.props.setCatIndex(this.props.historyIndex);
      // this.props.catWasSelected('history')
      if (index === 0) {
        this.props.setCatIndex(this.props.sportsIndex);
        this.props.catWasSelected('sports');
      }
      if (index === 1) {
        this.props.setCatIndex(this.props.musicIndex);
        this.props.catWasSelected('music');
      }
      if (index === 2) {
        this.props.setCatIndex(this.props.entertainmentIndex);
        this.props.catWasSelected('entertainment');
      }
      if (index === 3) {
        this.props.setCatIndex(this.props.historyIndex);
        this.props.catWasSelected('history');
      }
      if (index === 4) {
        this.props.setCatIndex(this.props.geographyIndex);
        this.props.catWasSelected('geography');
      }
    }, 1000);
  }

  render() {
    // 0 - sports / 1 - music / 2 - entertainment / 3 - history / 4 - geography

    const num_horizontal = 3; // 6
    const num_vertical = 5; // 10
    const total_grid_items = num_horizontal * num_vertical;
    const grid_array = [];
    for (i = 0; i < total_grid_items; i++) {
      grid_array.push(i);
    }
    const itemWidth = width / num_horizontal;
    // const item_height = ( ( ( height_new) / num_vertical ) );
    const itemHeight = height / num_vertical - 8;

    return (
      <LinearGradient colors={variables.gradient} style={{ flex: 1 }}>
        <View style={styles.categoriesWrap}>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}>
            <SvgElement svg_data={sports} svg_scale={0.375} />
            <Text style={styles.categoriesText}>Sports</Text>
            <Animated.View
              style={[
                styles.catColorOverlay,
                { opacity: this.state.animatedOpacity[0] },
              ]}
            />
          </View>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}>
            <SvgElement svg_data={music} svg_scale={1.4} />
            <Text style={styles.categoriesText}>Music</Text>
            <Animated.View
              style={[
                styles.catColorOverlay,
                { opacity: this.state.animatedOpacity[1] },
              ]}
            />
          </View>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}>
            <SvgElement svg_data={television} svg_scale={0.15} />
            <Text style={styles.categoriesText}>TV & Movies</Text>
            <Animated.View
              style={[
                styles.catColorOverlay,
                { opacity: this.state.animatedOpacity[2] },
              ]}
            />
          </View>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}>
            <SvgElement svg_data={history} svg_scale={0.7} />
            <Text style={styles.categoriesText}>History</Text>
            <Animated.View
              style={[
                styles.catColorOverlay,
                { opacity: this.state.animatedOpacity[3] },
              ]}
            />
          </View>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}>
            <SvgElement svg_data={geography} svg_scale={0.122} />
            <Text style={styles.categoriesText}>Geography</Text>
            <Animated.View
              style={[
                styles.catColorOverlay,
                { opacity: this.state.animatedOpacity[4] },
              ]}
            />
          </View>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, minHeight: itemHeight },
            ]}
          />
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
  chooseCat: state.chooseCat,
  catIndex: state.catIndex,
  historyIndex: state.historyIndex,
  sportsIndex: state.sportsIndex,
  entertainmentIndex: state.entertainmentIndex,
  musicIndex: state.musicIndex,
  geographyIndex: state.geographyIndex,
  // statusBarHeight: state.statusBarHeight,
});

const mapActionsToProps = dispatch => ({
  catWasSelected(cat) {
    dispatch({ type: 'CAT_CHOSEN', payload: cat });
  },
  setCatIndex(index_array) {
    dispatch({ type: 'SET_CAT_INDEX', payload: index_array });
  },
});

export const Categories = connect(
  mapStateToProps,
  mapActionsToProps,
)(_Categories);
