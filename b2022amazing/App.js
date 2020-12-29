import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, Image } from 'react-native';


export default class App extends React.Component {
  state = {
    text : "text1"
  }
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(data=>data.json())
    .then(data2=>{
      console.log(data2)
      this.setState({
        text:data2[1].name
      })
    })
  }
    render(){
      return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
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
    backgroundColor: 'skyblue',
    fontSize: 30,
    borderWidth: 1
  },
  img:{
    width:300,
    height:300,
    margin:3,
    borderRadius: 3
  }
});
