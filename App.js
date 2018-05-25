import React from 'react';
import { StyleSheet, Alert, Button, TextInput, Text, Image, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: '90%', borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>{'user input: ' + this.state.text}</Text>
        <Text>摇一摇打开开发选项.</Text>
        <Button
          onPress={this._onPressButton}
          title="Press Me"
          color="#841584"
        />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
