/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

// 画面
import first_screen from './app/screen/first_screen';
import second_screen from './app/screen/second_screen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="FIRST_SCREEN"
          component={first_screen}
          title='First'
          initial
        />
        <Scene key="SECOND_SCREEN"
          component={second_screen}
          title='Second'
        />
      </Scene>
    </Router>
  );
}

export default App;

