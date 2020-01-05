import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('YEET');
  return (
    <View style={styles.container}>

  <Text>{outputText}</Text>
      <Button title="Change Text" onPress={e => {setOutputText('BONOBO MONKEY')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
