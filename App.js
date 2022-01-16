import React, {useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

function App() {
  const [counter, setCounter] = useState(0);
  function increaseCounter() {
    setCounter(counter+1);
  }
   
   function decreaseCounter(){
     setCounter(counter-1);
   }
   
   return(
     <SafeAreaView>
        <Text style= {{fontSize: 40}}> Counter:{counter} </Text>

        <Button title='Increase Counter' onPress={increaseCounter} />
        <Button title='Decrease Counter' onPress={decreaseCounter} />

     
     </SafeAreaView>
   );
}
export default App;

