import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, Image } from "react-native";

import imagesPath from '../assets/constants/imagePath';

const data = [
    {
        bookType: 'Science',
        bookCount: 20,
        donationWay: 'Contact with NGO',
        availability: '09-08-2022'
    },
    {
        bookType: 'Compter Science',
        bookCount: 50,
        donationWay: 'Deliver to the relevent prson',
        availability: '09-08-2022'
    },
    {
        bookType: 'History Books',
        bookCount: 7,
        donationWay: 'Contact with NGO',
        availability: '09-07-2022'
    },
    {
        bookType: 'Novel',
        bookCount: 3,
        donationWay: 'Deliver to the relevent prson',
        availability: '09-08-2022'
    }
]

const AllBooks = () => {

    const navigation = useNavigation();
    const [dataList, setDataList] = useState(data);

    const [credentials, setCredentials] = useState({
        books:[]
    });

    useEffect(async () => {
        try {
            const res = await  fetch(`http://172.28.6.40:8050/books`, {
                method: "GET"
            });
            const result = await res.json();
            if (!result.error) {
                //setContacts(result.credentials);
                //alert("data etched")
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
                    <Text style={styles.itemName}>{item.bookType}</Text>
                    <Text style={styles.itemOthers}>Book Count: {item.bookCount}</Text>
                    <Text style={styles.itemOthers}>Donation Way: {item.donationWay}</Text>
                    <Text style={styles.itemOthers}>Availability: {item.availability}</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.myTitle}>Book Donation Entries</Text>

                <FlatList 
                    data={dataList}
                    keyExtractor={(e, i) => i.toString()}
                    renderItem={renderItem}
                />

                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("AddBook")}}>
                        <Image source={imagesPath.icAdd} 
                            style={{marginTop:100, marginLeft:300, width:60, height:60}}
                        />
                    </TouchableOpacity>
                </View>

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

export default AllBooks;