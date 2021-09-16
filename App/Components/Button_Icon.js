/**
 * Button Component
 */
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

class Button_Inner extends Component {
  render() {
    return (
      <Icon
        //raised - reverse
        name={this.props.iconCode}
        type={this.props.iconType}
        color="#fff"
      />
    );
  }
}

module.exports = Button_Inner;
