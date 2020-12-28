import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, Image } from 'react-native';


export default class App extends React.Component {
  state = {
    text : "text1"
  }
    render(){
      return (
      <View style={styles.container}>
        <ScrollView>
        <Image 
          source={{uri: 'https://img1.goodfon.ru/original/2560x1440/c/85/prazdnik-svecha-ogon-korobka.jpg'}}
          style={styles.img}
          />
          <Image 
          source={{uri: 'https://img1.goodfon.ru/original/2560x1440/c/85/prazdnik-svecha-ogon-korobka.jpg'}}
          style={styles.img}
          />
          <Image 
          source={{uri: 'https://img1.goodfon.ru/original/2560x1440/c/85/prazdnik-svecha-ogon-korobka.jpg'}}
          style={styles.img}
          />
          <Image 
          source={{uri: 'https://img1.goodfon.ru/original/2560x1440/c/85/prazdnik-svecha-ogon-korobka.jpg'}}
          style={styles.img}
          />
        </ScrollView>
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
    // alignItems: 'center',
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
