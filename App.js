import React, { PureComponent } from 'react';
import { createStackNavigator } from 'react-navigation';
import RouteConfig from './src/config/route'

const Navigator = createStackNavigator(RouteConfig);

export default class App extends PureComponent {
  render() {
    return (
      <Navigator />
    )
  }
};