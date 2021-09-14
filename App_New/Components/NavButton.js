/**
 * Nav Button Component
 */
import React, { Component } from 'react';

import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 17,
    fontFamily: 'Lalezar-Regular',
  },
});

class NavButton extends Component {
  render() {
    const { props } = this;
    return (
      <TouchableHighlight
        onPress={() => props.handleClick()}
        underlayColor="transparent">
        <Text style={styles.button}>{props.buttonText}</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = NavButton;
