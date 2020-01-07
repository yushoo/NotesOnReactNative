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
import GoalInput from './Components/GoalInput';

export default function App() {
  //list of objects
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    //anonymous function
    //each goal is an object with props key and value
    //concatenate currentGoals.length to string because flatlist expects key to be a string
    setGoals(currentGoals => [
      ...currentGoals, 
      { id: ''+currentGoals.length, value: goalTitle}]);
  };
  
  return (
    <View style={styles.screen}>
      <GoalInput onAddHandler={addGoalHandler}
                />
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
  }
});
