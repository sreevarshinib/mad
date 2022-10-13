import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { auth } from '../../firebase'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
// import { ToastAndroid } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import firebase from "firebase/compat";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setisLoading] = useState(false);
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("HomePage")
      }
    })
    return unsubscribe
  }, [])
  const handleLogin = () => {
    setisLoading(true);
    console.log(email);
    if (email.length == 0 || password.length == 0) {
      setisLoading(false);
      alert("Please enter  email and password");
    }
    const exp = /\S+@\S+\.\S+/;
    if (!exp.test(email)) {
      setisLoading(false);
      alert("Please enter a valid email address");
    }
    else {

      auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
          setisLoading(false);
        })
        .catch(error => {
          setisLoading(false);
          alert("Unregistered User");
        }
        )
    }
  }
  return (
    <View style={styles.container}>
      <Header>LOGIN</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        onChangeText={text => setEmail(text)}
        error={!!email.error}
        errorText={email.error}/>
      <TextInput
        label="Password"
        returnKeyType="done"
        onChangeText={text => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>Login</Button>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('SignupScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <ActivityIndicator animating={isLoading} style={styles.loading} size="large" color="#560CCE"></ActivityIndicator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: '#414757',
  },
  link: {
    fontWeight: 'bold',
    color: '#000000',
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