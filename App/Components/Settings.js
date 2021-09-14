import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import variables from '../Styles/Variables';
import NavBarSettings from './NavBarSettings';

const mainBackground = '#FCFCFC';

const styles = StyleSheet.create({
  outerWrap: {
    backgroundColor: mainBackground,
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 100,
  },
  innerWrap: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 26,
    color: '#111',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      randomQuestionMode: true,
    };
  }

  UNSAFE_componentWillMount() {
    // get async storage data
    AsyncStorage.getItem('@RandomQuestionMode')
      .then(setting => {
        if (setting === 'true') {
          this.setState({
            randomQuestionMode: true,
          });
        } else {
          this.setState({
            randomQuestionMode: false,
          });
        }
      })
      .done();
  }

  toggleClick() {
    const { state } = this;
    if (!state.randomQuestionMode) {
      AsyncStorage.setItem('@RandomQuestionMode', 'true');
    } else {
      AsyncStorage.setItem('@RandomQuestionMode', 'false');
    }
    this.setState({
      randomQuestionMode: !state.randomQuestionMode,
    });
  }

  render() {
    const { state } = this;
    return (
      <View style={styles.outerWrap}>
        <View style={styles.innerWrap}>
          <Text style={styles.titleText}>Quizian Settings</Text>
          <CheckBox
            title="Random Question Mode"
            checked={state.randomQuestionMode}
            onPress={() => this.toggleClick()}
            checkedColor={variables.brandThird}
          />
        </View>
        <NavBarSettings />
      </View>
    );
  }
}

module.exports = Settings;
