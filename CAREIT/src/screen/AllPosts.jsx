import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, Image } from "react-native";
//import axios from 'axios';
//import imagesPath from '../assets/constants/imagePath';

const data = [
    {
        name: 'Vihanga Perera',
        description: 'Hello! I am looking for any kind of cloths and sanitation.'
    },
    {
        name: 'Dineth Perera',
        description: 'Hello! I am looking for any kind of cloths and sanitation.'
    },
    {
        name: 'Chandima Perera',
        description: 'Hello! I am looking for any kind of cloths and sanitation.'
    }
]

const AllPosts = () => {

    const navigation = useNavigation();
    const [dataList, setDataList] = useState(data);

    const [credentials, setCredentials] = useState({
        posts:[]
    });

    useEffect(async () => {
        try {
            const res = await  fetch(`http://172.28.6.42:8050//clothsPosts`, {
                method: "GET"
            });
            const result = await res.json();
            if (!result.error) {
                //setContacts(result.credentials);
                alert("data fetched")
            } else {
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemOthers}>Description: {item.description}</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.myTitle}>Help seeker posts</Text>

                <FlatList 
                    data={dataList}
                    keyExtractor={(e, i) => i.toString()}
                    renderItem={renderItem}
                />

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    myTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black'
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    listTab: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'black',
        padding: 5,
        width: 95,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 16
    },
    btnTabActive: {
        backgroundColor: '#2c4af5'
    },
    textTabActive: {
        color: '#fff'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#96f1ff',
        borderRadius: 20
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    itemOthers: {
        fontSize: 16,
        textAlign: 'center'
    },
    itemStatus: {
        color: 'red',
        paddingHorizontal: 10,
        textAlign: 'right'
    }
});

export default AllPosts;