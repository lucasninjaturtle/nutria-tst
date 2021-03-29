import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { List, 
  ListItem,
   Thumbnail, 
   Text, 
   Left, 
   Body, 
   Right, 
   Button,
   Card, CardItem } from 'native-base';
import axios from 'axios'

export default function App() {

    //importing data
    const [data, setData] = useState({})
    const [change, setChange] = useState(1)

    useEffect(() => {
      
      axios
      .get(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`)
      .then((res) => setData(res.data))
      .catch((error) => alert("Error to load data"))

      return () => {
          setData()
      }
  }, [change])



  return (
    <View>
    {data ? (

      <View style={styles.mainview}>
        
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri:data.image }} />
              </Left>
              <Body>
                <Text>{data.name}</Text>
              </Body>
              <Right>
                <Button onPress={()=>console.log(data)} transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <Card>
            <CardItem header bordered>
              <Text>EMAIL</Text>
              <Right>
                  <Text>{data.email}</Text>
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Text>PHONE</Text>
              <Right>
                  <Text>{data.phone}</Text>
              </Right>
            </CardItem>
            
            </Card>
            <Button onPress={()=>setChange(change+1)} style={{alignSelf:'center'}} title='newuser'>
              <Text>New User</Text>
            </Button>
          </View>
    ) : (<Text> LOADING ...</Text>)}
        
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
  mainview:{
    marginTop:200
  }
});
