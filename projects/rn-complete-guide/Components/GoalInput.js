import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const GoalInput = props => {
    //text 
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
  

    return(
        <View style={styles.inputContainer}>
        <TextInput placeholder="Goal" 
                   style={styles.inputArea} 
                   //don't add paranthesis because don't want to execute immediately
                   onChangeText={goalInputHandler}
                   value={props.currentInput}/>
        <Button title="ADD" onPress={() => props.onAddHandler(enteredGoal)}/>
      </View>
    );
};

const styles = StyleSheet.create({
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

export default GoalInput;