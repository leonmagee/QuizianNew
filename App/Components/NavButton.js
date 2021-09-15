/**
 * Nav Button Component
 */
import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    color: '#777',
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
        <View>
          <Icon
            name={this.props.iconCode}
            type={this.props.iconType}
            color="#777"
          />
          <Text style={styles.button}>{props.buttonText}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = NavButton;
