import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YouTube from 'react-native-youtube';

export default class App extends React.Component {
  render() {
    console.log('render!');
    return (
      <View style={styles.container}>
        <Text>Open up App.js to edit the app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <YouTube
          apiKey="AIzaSyA33iBM79iuKbau2YT7-jdIZTvsAKeIJvc"
          videoId="KVZ-P-ZI6W4"   // The YouTube video ID
          play={true}             // control playback of video with true/false
          fullscreen={true}       // control whether the video should play in fullscreen or inline
          loop={true}             // control whether the video should loop when ended

          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => console.log(e)}

          style={{ alignSelf: 'stretch', height: 300 }}
        />
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
