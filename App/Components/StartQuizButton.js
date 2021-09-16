/**
 * Button Component
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    color: '#777',
    fontWeight: '400',
    fontSize: 17,
    fontFamily: 'Lalezar-Regular',
    backgroundColor: 'transparent',
  },
});

class StartQuizButton extends Component {
  render() {
    return (
      <View>
        <Icon
          //raised
          name={this.props.iconCode}
          type={this.props.iconType}
          color="#fff"
        />
        {/* <Text style={styles.button}>{this.props.buttonText}</Text> */}
      </View>
    );
  }
}

module.exports = StartQuizButton;
