import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
export default function Background({ children }) {
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ffffff'
  },
})
