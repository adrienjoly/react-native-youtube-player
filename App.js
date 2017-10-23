import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    console.log('render!');
    const uri = 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0';
    return (
    <View style={styles.container}>
      <Text>Open up App.js to edit the app!</Text>
      <Text>Shake your phone or Cmd-M to open the developer menu.</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        source={{ uri }}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => console.log(e)}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    //flex: 1,
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});
