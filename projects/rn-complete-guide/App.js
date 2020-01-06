import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{styles.screen}}>
      <View style={{styles.inputContainer}}>
        <TextInput placeholder="Goal" style={{styles.inputArea}}/>
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

//nested javascript object for styling
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  inputArea: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10, 
    width: 200
  }
});
