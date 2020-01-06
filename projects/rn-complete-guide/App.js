import React, { useState } from 'react';
import { StyleSheet, 
          Text, 
          View, 
          TextInput, 
          Button, 
          ScrollView,
          FlatList
        } from 'react-native';

//components
import GoalItem from './Components/GoalItem';

export default function App() {
  //text 
  const [enteredGoal, setEnteredGoal] = useState('');
  //list of objects
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //anonymous function
    //each goal is an object with props key and value
    //concatenate currentGoals.length to string because flatlist expects key to be a string
    setGoals(currentGoals => [
      ...currentGoals, 
      { id: ''+currentGoals.length, value: enteredGoal}]);
  };
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goal" 
                   style={styles.inputArea} 
                   //don't add paranthesis because don't want to execute immediately
                   onChangeText={goalInputHandler}
                   value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList
        // keyExtractor={(item, index) => item.id} 
        data={goals}
        renderItem={itemData => 
          <GoalItem title={itemData.item.value}/>}
        />
        
    </View>
  );
}

//Flatlist key generator example
{/* <FlatList 
  data={[{name: 'a'}, {name: 'b'}]} 
  renderItem={
    ({item}) => <Text>{item.name}</Text>
  } 
  keyExtractor={(item, index) => index.toString()}
/> */}

//ScrollView example
// {goals.map((goal, index) => 
//   <View key={index}>
//     <Text style={styles.listItem}>
//       {goal}
//     </Text>
// </View>)}

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
