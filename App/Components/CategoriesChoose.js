import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableHighlight,
} from 'react-native';
import styles from '../Styles/DefaultStyles';
import variables from '../Styles/Variables';
import SvgElement from './SvgElement';
import television from '../SVG/television';
import history from '../SVG/history';
import music from '../SVG/music';
import sports from '../SVG/sports';
import geography from '../SVG/geography';

const { width, height } = Dimensions.get('window');

class _CategoriesChoose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedOpacity: [
        new Animated.Value(0), // sports
        new Animated.Value(0), // music
        new Animated.Value(0), // tv&movies
        new Animated.Value(0), // history
        new Animated.Value(0), // geography
      ],
    };
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

  render() {
    // 0 - sports / 1 - music / 2 - entertainment / 3 - history / 4 - geography
    const numHorizontal = 3; // 6
    const numVertical = 5; // 10
    const totalGridItems = numHorizontal * numVertical;
    const gridArray = [];
    let i;
    for (i = 0; i < totalGridItems; i++) {
      gridArray.push(i);
    }
    const itemWidth = width / numHorizontal;
    // const itemHeight = ( ( ( height_new) / num_vertical ) );
    const itemHeight = height / numVertical;

    const { props } = this;

    return (
      <LinearGradient colors={variables.gradient} style={{ flex: 1 }}>
        <View style={styles.categoriesWrap}>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <TouchableHighlight
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
            underlayColor={'transparent'}
            onPress={() => {
              props.setCatIndex(props.sportsIndex);
              props.catWasSelected('sports');
            }}>
            <>
              <SvgElement svg_data={sports} svg_scale={0.375} />
              <Text style={styles.categoriesText}>Sports</Text>
              <Animated.View
                style={[
                  styles.catColorOverlay,
                  { opacity: this.state.animatedOpacity[0] },
                ]}
              />
            </>
          </TouchableHighlight>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <TouchableHighlight
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
            underlayColor={'transparent'}
            onPress={() => {
              props.setCatIndex(props.musicIndex);
              props.catWasSelected('music');
            }}>
            <>
              <SvgElement svg_data={music} svg_scale={1.4} />
              <Text style={styles.categoriesText}>Music</Text>
              <Animated.View
                style={[
                  styles.catColorOverlay,
                  { opacity: this.state.animatedOpacity[1] },
                ]}
              />
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
            underlayColor={'transparent'}
            onPress={() => {
              props.setCatIndex(props.entertainmentIndex);
              props.catWasSelected('entertainment');
            }}>
            <>
              <SvgElement svg_data={television} svg_scale={0.15} />
              <Text style={styles.categoriesText}>TV & Movies</Text>
              <Animated.View
                style={[
                  styles.catColorOverlay,
                  { opacity: this.state.animatedOpacity[2] },
                ]}
              />
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
            underlayColor={'transparent'}
            onPress={() => {
              props.setCatIndex(props.historyIndex);
              props.catWasSelected('history');
            }}>
            <>
              <SvgElement svg_data={history} svg_scale={0.7} />
              <Text style={styles.categoriesText}>History</Text>
              <Animated.View
                style={[
                  styles.catColorOverlay,
                  { opacity: this.state.animatedOpacity[3] },
                ]}
              />
            </>
          </TouchableHighlight>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <TouchableHighlight
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
            underlayColor={'transparent'}
            onPress={() => {
              props.setCatIndex(props.geographyIndex);
              props.catWasSelected('geography');
            }}>
            <>
              <SvgElement svg_data={geography} svg_scale={0.122} />
              <Text style={styles.categoriesText}>Geography</Text>
              <Animated.View
                style={[
                  styles.catColorOverlay,
                  { opacity: this.state.animatedOpacity[4] },
                ]}
              />
            </>
          </TouchableHighlight>
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
            ]}
          />
          <View
            style={[
              styles.categoriesBox,
              { width: itemWidth, height: itemHeight },
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
  setCatIndex(indexArray) {
    dispatch({ type: 'SET_CAT_INDEX', payload: indexArray });
  },
});

export const CategoriesChoose = connect(
  mapStateToProps,
  mapActionsToProps,
)(_CategoriesChoose);
