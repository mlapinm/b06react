import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const MyData = (props)=> {
    return (
      <View>
      <Text style={styles.text}>
        {props.name} {props.status}
        </Text>
      <Text>{props.age}</Text>
      </View>
    )
}

export default class App extends React.Component {
  render(){
      return (
      <View style={styles.container}>
        <MyData name="John" status="Dow" age="33" />
        <MyData name="Vasya" status="Ivanov" age="43"  />
        <MyData name="Smith" status="Smith" age="35"  />
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
