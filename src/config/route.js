import {StyleSheet} from 'react-native';

import MainTab from './navigator'

/*
    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。
*/
export default RouteConfig = {
  MainTab: {
    screen: MainTab,
    navigationOptions: { header: null }
  }
};

