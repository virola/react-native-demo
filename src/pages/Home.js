import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Alert,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
// import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class Home extends PureComponent {

  constructor(props) {
    super(props);
    
    this.state = {

    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Hello Home!</Text>
        </View>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    position: 'relative'
  }
});
