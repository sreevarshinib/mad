import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat';
import { Header } from 'react-native-elements';
import Button from '../components/Button';
export default function ListUsers() {
    const userEmail = 'sreevarshini13@gmail.com'
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        firebase.firestore().collection('User').get().then(function (querySnapshot) {
            const temp = []
            querySnapshot.forEach(function (doc) {
                temp.push({
                    id: doc.id,
                    name: doc.data().Name,
                    address: doc.data().Address,
                    email: doc.data().Email
                })
            })
            setData(temp)
        });
    }, [])
    return (
        <View style={styles.container}>
            <Header centerComponent={{ text: 'User', style: { color: '#fffff', fontSize: 19 } }} backgroundColor="#000000"
                leftComponent={{ icon: 'arrow-back', style: { color: '#fffff', fontSize: 14 }, onPress: () => navigation.navigate("HomePage") }} />
            <View style={styles.container1}>
                <DataTable>
                    <DataTable.Row style={styles.row}>
                        <DataTable.Title textStyle={styles.title}>Mail</DataTable.Title>
                        <DataTable.Title textStyle={styles.title}>Name</DataTable.Title>
                        <DataTable.Title textStyle={styles.title}>Address</DataTable.Title>
                    </DataTable.Row>
                    {data.length > 0 ? (data.map((item, index) => (
                        <DataTable.Row style={styles.row} key={index}>
                            <DataTable.Title textStyle={styles.content}>{item.email}</DataTable.Title>
                            <DataTable.Title textStyle={styles.content}>{item.name}</DataTable.Title>
                            <DataTable.Title textStyle={styles.content}>{item.address}</DataTable.Title>
                        </DataTable.Row>
                    ))) : (<></>)}
                </DataTable>
            </View>
            <ActivityIndicator animating={isLoading} style={styles.loading} size="large" color="#ffffff"></ActivityIndicator>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContent: {
        padding: 20,
        alignItems: 'center'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: '#560CCE',
        fontWeight: '600',
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    icon: {
        width: 60,
        height: 60,
    },
    info: {
        fontSize: 22,
        color: "#696969",
    },
    title: {
        color: '#000000',
        fontSize: 18,
    },
    content: {
        color: '#000000',
        fontSize: 18,
    },
    row: {
        borderBottomWidth: 0,
        height: 70,
    },
    box: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',

    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff'
    },
    item: {
        width: '33%'
    },
    item1: {
        width: '67%',
        alignItems: 'flex-end'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
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
});
