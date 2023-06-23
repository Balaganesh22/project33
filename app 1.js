import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

export default function App() {
  const [name , setName] = useState('bala');

  return (
    <View style={style.Container}>
        <Text style={
            {borderColor:'green',
            fontSize:22,
            textAlign:'center',
            borderWidth:3
            }
        }>type anything</Text>
        <TextInput
        multiline
        style={style.input}
          placeholder='e.g. name'
          onChangeText={(val) => setName(val)}></TextInput>
        <Button onPress={() =>{
          alert('hello');
        }}title="tap me!"></Button>
          <Text>name: {name} </Text>
        
    </View>
  );
}

const style = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor:'#ECCD0A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 2,
    borderColor: '#777',
    padding: 8,
    margin: 10,

  }
  

});
