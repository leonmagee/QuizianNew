/**
 * Button to Start Quiz
 */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: '#222',
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#111',
    borderTopWidth: 1,
    width,
  },
});

const MenuBar_Wrap = ({ children }) => {
  return <View style={styles.menuBar}>{children}</View>;
};

export default MenuBar_Wrap;
