/**
 * IOS Index file
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
//import {AppRegistry} from 'react-native';
import HomepageImage from './App/Components/HomepageImage';
// import HomepageImage from './App/Components/Settings';
import store from './App/Redux/store';

//export default class Quizian extends Component {
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomepageImage />
      </Provider>
    );
  }
}
//export default App;
//AppRegistry.registerComponent('Quizian', () => Quizian);
