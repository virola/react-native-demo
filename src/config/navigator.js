import React, { PureComponent } from 'react'
import {
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import User from '../pages/User';
import Add from '../pages/Add';

const styles = StyleSheet.create({
  navigatorTitle: {
    fontSize: 17
  },
  navigator: {
    // backgroundColor: '#d81e06',
  }
});

export default MainTab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
    }
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      tabBarLabel: '日历',
    }
  },
  Add: {
    screen: Add,
    navigationOptions: {
      tabBarLabel: '新建',
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarLabel: '我的',
    }
  }
}, {
  //这里设置的是一般情况下Tabbar共同的属性
  swipeEnabled: true, // 是否允许在标签之间进行滑动。
  animationEnabled: false, // 是否在更改标签时显示动画。
  lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    tabStyle: styles.navigator,
    activeTintColor: '#d81e06', // label和icon的前景色 活跃状态下（选中）。
    inactiveTintColor: '#515151', // label和icon的前景色 不活跃状态下(未选中)。
    labelStyle: styles.navigatorTitle
  }
});

