import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  state = {
    name : "John"
  }
  handleSt(){
    this.setState({
      name : "Smith"
    })
    console.log("updated ", this.state)
  }
    render(){
      return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.name}</Text>
        <Button title="click me" onPress={()=>{this.handleSt()}} />
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
