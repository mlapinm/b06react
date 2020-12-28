import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';


export default class App extends React.Component {
  state = {
    text : "text1"
  }
    render(){
      return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
        <TextInput placeholder="Type Here" 
        onChangeText={(text)=>{
          this.setState({text:text})
          }}/>
          <Button title="click me" 
          onPress = {() => {
            alert("4444");
            console.log("33333");
          } } />
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
  }
});
