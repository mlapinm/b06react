import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  state = {
    name : "John"
  }
    render(){
      return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'flex-start',
    flexDirection: "row",
    flexWrap: "wrap"
  },
  text: {
    color: 'blue',
    height: 180,
    width: 180,
    backgroundColor: 'skyblue',
    fontSize: 30,
    borderWidth: 1
  }
});
