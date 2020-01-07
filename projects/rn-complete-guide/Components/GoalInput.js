import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
    //text 
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
  
    const addGoalHandler = () => {
        props.onAddHandler(enteredGoal);
        setEnteredGoal('');
    }  

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Goal" 
                        style={styles.inputArea} 
                        //don't add paranthesis because don't want to execute immediately
                        onChangeText={goalInputHandler}
                        value={props.currentInput}/>
                <View style={styles.buttons}>
                    <Button title="Cancel" color="red" onPress={props.onCancel}/>
                    <Button title="ADD" onPress={addGoalHandler}/>
                 </View>
             </View>
        </Modal>
        
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      inputArea: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10, 
        width: 200,
        marginBottom: 10
      },
      buttons: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '50%'
      }
});

export default GoalInput;