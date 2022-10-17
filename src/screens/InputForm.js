import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, View, ScrollView } from 'react-native'
import { firebase } from '../../firebase'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { Header } from 'react-native-elements';
export default function InputForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();
  // const temp = firebase.auth().currentUser;
  // const userEmail=temp.email
  const email = 'sreevarshini13@gmail.com'

  const handleRegister = async (e) => {
    try {
      //adding record
      await firebase.firestore().collection('User').add({
        Email: email,
        Name: name,
        Address: address,
      }).then(()=>{
        console.log("Stored successfully")
        alert("Stored Successfully");
        navigation.navigate("Display")
      }
      )
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <Header centerComponent={{ text: 'User', style: { color: '#fff', fontSize: 19 } }}backgroundColor="#000000" 
      leftComponent={{ icon: 'arrow-back', style: { color: '#fffff', fontSize: 14 }, onPress: () => navigation.navigate("HomePage") }}/>
      <ScrollView>
        <TextInput label="Name" onChangeText={text => setName(text)} style={{width:'90%',justifyContent:'center',alignSelf:'center'}}/>
        <TextInput label="Address" onChangeText={text => setAddress(text)} style={{width:'90%',justifyContent:'center',alignSelf:'center'}}/>
      </ScrollView>
      <Button mode="contained" onPress={handleRegister} style={{justifyContent:'center',alignSelf:'center'}}>Submit</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputsContainer: {
    flex: 1,
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 15,
    width: '80%',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})