import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native'
import { firebase } from '../../firebase'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { Header } from 'react-native-elements';

export default function Edit() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(true);
    // const temp = firebase.auth().currentUser;
    // const userEmail=temp.email
    const userEmail = 'sreevarshini13@gmail.com'
    const [data, setData] = useState([]);
    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('User').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                if (userEmail.includes(doc.data().Email)) {
                    // setData(doc.data())
                    setName(doc.data().Name)
                    setAddress(doc.data().Address)
                    setisLoading(false)
                }
                return unsubscribe
            })
        });
    }, [])
    const update = (id) => {
        if (name == "") {
            setName(data.Name)
        }
        if (address == "") {
            setAddress(data.Address)
        }
        const updateRecord = firebase.firestore().collection('User').doc(id);
        updateRecord.set({
            Name: name,
            Address: address,
        })
    }
    const handleEdit = async (e) => {
        try {
            setisLoading(true);
            const unsubscribe = firebase.firestore().collection('User').get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (userEmail.includes(doc.data().Email)) {
                        update(doc.id)
                    }
                    return unsubscribe
                })
            });
            setisLoading(false);
            alert("Edited successfully")
            navigation.navigate('Display')
        } catch (e) {
            setisLoading(false);
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Header centerComponent={{ text: 'User', style: { color: '#fff', fontSize: 19 } }} backgroundColor="#000000"
                leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate("Display") }}
                rightComponent={{ text: 'Logout', style: { color: '#fff', fontSize: 14 }, onPress: () => navigation.navigate("Logout") }} />
            <ScrollView>
                <TextInput label="Name" value={name} onChangeText={text => setName(text)} style={{width:'90%',justifyContent:'center',alignSelf:'center'}}/>
                <TextInput label="Address" value={address} onChangeText={text => setAddress(text)} style={{width:'90%',justifyContent:'center',alignSelf:'center'}}/>
            </ScrollView>
            <Button onPress={handleEdit} style={styles.button1}>Submit</Button>
            <ActivityIndicator animating={isLoading} style={styles.loading} size="large" color="#ffffff"></ActivityIndicator>
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