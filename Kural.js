import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
const kural = require('/expo project/my-react-app/src/kural.json');

const App = () => {
  const [randomField, setRandomField] = useState('');

  useEffect(() => {
    getRandomField(); 
  }, []);

  const getRandomField = () => {
    const randomIndex = Math.floor(Math.random() * kural.length);
    const randomItem = kural[randomIndex];
    setRandomField(randomItem.Line1); // replace 'fieldName' with the actual field name you want to display
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{randomField}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default App;
