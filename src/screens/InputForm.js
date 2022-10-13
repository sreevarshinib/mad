import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet,View, ScrollView,  } from 'react-native'
import { firebase } from '../../firebase'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
export default function InputForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();
  // const temp = firebase.auth().currentUser;
  // const userEmail=temp.email
  const userEmail = 'sreevarshini13@gmail.com'
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('UserDetails').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (userEmail.includes(doc.data().Email)) {    
          setData(doc.data())
          addExisting(doc.data().Disease)
        }
        return unsubscribe
      })
    });
  }, [])
  const update =(id)=>{
    if (name == "" ){
      setName(data.Name)
    }
    if(age == ""){
      setName(data.Age)
    }
    const updateRecord = firebase.firestore().collection('UserDetails').doc(id);
      updateRecord.set({
        Name:name,
        Age:age,
        Disease:disease,
      })
  }
  
  const handleRegister = async (e) => {
    try {
        await firebase.firestore().collection('').add({
          Email:email,
          Name:name,
          Address:address,
        })
    } catch (e) {
      console.log(e);
  }}
  return (
    <View style={styles.container}>
      <Header centerComponent={{ text: 'User', style: { color: '#fff' , fontSize:18} }}
        rightComponent={{ icon: 'home', color: '#fff' }} 
        backgroundColor="#000000" /> 
      <ScrollView>
        <TextInput label="Name" onChangeText={text => setName(text)} />
        <TextInput label="Address" onChangeText={text => setAddress(text)} />
      </ScrollView>
      <Button onPress={handleRegister} style={styles.button1}>Submit</Button>
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
  button: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 14,
    alignItems: 'flex-end'
  },
  button1: {
    borderRadius: 10,
    fontSize: 15,
    width: '30%',
    height: 50,
    color: '#ffffff',
    alignContent: 'center',
    alignSelf: 'center',
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