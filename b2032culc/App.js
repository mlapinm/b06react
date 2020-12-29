import { StatusBar } from 'expo-status-bar';
import { TextInput, Appbar, Button } from 'react-native-paper';
import React from 'react';
import { StyleSheet, Text, View,  Alert } from 'react-native';



export default class App extends React.Component {
  state = {
    fname : "",
    sname : ""
  }
   componentDidMount(){

  }
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');
    render(){
      return (
      <View style={styles.container}>
            <Appbar.Header>
      <Appbar.BackAction onPress={this._goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={this._handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
    </Appbar.Header>
        <Text style={styles.text}>{this.state.fname}</Text>
        <TextInput
      label="fname"
      value= {this.state.fname}
      onChangeText={text => this.setState({fname: text})}
    />
        <TextInput
      label="sname"
      value= {this.state.fname}
      onChangeText={text => this.setState({sname: text})}
    />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

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
