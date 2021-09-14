import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';

/**
 * Helper Functions
 */

/**
 * Return a shuffled array
 * @param array
 * @returns {*}
 */
export const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const intermediateArray = length => {
  const cat_key_array = [];
  for (let i = 0; i < length; ++i) {
    cat_key_array.push(i);
  }
  return shuffleArray(cat_key_array);
};

export const setAsyncIndex = (key, array) => {
  const dataString = JSON.stringify(array);
  AsyncStorage.setItem(`@QuestionIndex:${key}`, dataString)
    .then(() => {})
    .done();
};

/**
 * react-native-viewport-units package
 */
const { width, height } = Dimensions.get('window');

const units = {
  vw: width / 100,
  vh: height / 100,
};

export const { vw, vh } = units;
// export const vw = units.vw
// export const vh = units.vh

// const units = {
//     vw: width/100, vh: height/100
// };

// units.vmin = Math.min(units.vw, units.vh);
// units.vmax = Math.max(units.vw, units.vh);

// const {vw, vh} = units
// const {vw, vh, vmin, vmax} = units

// console.log('width', width)
// console.log('height', height)
// console.log('vw', vw)
// console.log('vh', vh)
// console.log('vmin', vmin)
// console.log('vmax', vmax)
