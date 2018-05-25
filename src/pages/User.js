import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class Calendar extends PureComponent {

  constructor(props) {
    super(props);
    
    this.state = {
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>this is 个人设置</Text>
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