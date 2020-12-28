import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const MyData = ()=>{
  return (
    <Text style={styles.text}>Wah wah wah</Text>
  )
}

export default class App extends React.Component {
  render(){
      return (
      <View style={styles.container}>
        <Text >text1</Text>
        <MyData />
        <MyData />
        <MyData />
        <StatusBar style="auto" />
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
  text: {
    color: 'blue',
    backgroundColor: 'yellow',
    fontSize: 30
  }
});
