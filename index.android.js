/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TestView } from "./components/TestView";

export default class testtest extends Component {
  render() {
    return (
      <TestView/>
    );
  }
}

AppRegistry.registerComponent('testtest', () => testtest);
