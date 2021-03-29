import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import axios from 'axios'

export default function App() {

    //importing data
    const [data, setData] = useState({})

    useEffect(() => {
      
      axios
      .get(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`)
      .then((res) => setData(res.data))
      .catch((error) => alert("Error to load data"))

      return () => {
          setData()
      }
  }, [])



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='consoleLog' onPress={()=>console.log(data)}/>
      <StatusBar style="auto" />
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
