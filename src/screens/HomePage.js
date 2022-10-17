import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
export default function HomePage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 200 }}>
                <Button mode="contained" onPress={() => navigation.navigate('InputForm')} style={{ justifyContent: 'center', alignSelf: 'center' }}>Store </Button>
                <Button mode="contained" onPress={() => navigation.navigate('ListUsers')} style={{ justifyContent: 'center', alignSelf: 'center' }}>Display </Button>
                <Button mode="contained" onPress={() => navigation.navigate('Edit')} style={{ justifyContent: 'center', alignSelf: 'center' }}>Edit</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})