import React, { useState } from 'react';

import { StyleSheet, TextInput, View } from 'react-native';


export default function App() {

  const [password, setPassword] = useState('');


  return (

    <View style={styles.container}>

      <View style={styles.inputContainer}>

        <TextInput

          style={styles.inputField}

          name="password"

          placeholder="Enter password"

          autoCapitalize="none"

          autoCorrect={false}

          textContentType="newPassword"

          secureTextEntry

          value={password}

          enablesReturnKeyAutomatically

          onChangeText={text => setPassword(text)}

        />

      </View>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5EEDC',

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 12

  },

  inputContainer: {

    backgroundColor: 'white',

    width: '100%',

    borderRadius: 8,

    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 4,

    borderColor: '#d7d7d7'

  },

  inputField: {

    padding: 14,

    fontSize: 22,

    width: '90%'

  }

});