import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, Image } from "react-native";
//import axios from 'axios';

import imagesPath from '../assets/constants/imagePath';

const data = [
    {
        name: 'Cement',
        quantity: 100,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Pending'
    },
    {
        name: 'White Paint',
        quantity: 200,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Approved'
    },
    {
        name: 'Earth Wire Role',
        quantity: 20,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Pending'
    },
    {
        name: 'Weather Sheild Paint',
        quantity: 5,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Declined'
    }
]

const AllFoods = () => {

    const navigation = useNavigation();
    const [dataList, setDataList] = useState(data);

    const [credentials, setCredentials] = useState({
        foods:[]
    });

    useEffect(async () => {
        try {
            const res = await  fetch(`http://192.168.8.192:8050/foods`, {
                method: "GET"
            });
            const result = await res.json();
            if (!result.error) {
                //setContacts(result.credentials);
                alert("data etched")
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
                    {/* <Text style={styles.itemStatus}>{item.status}</Text> */}
                    <Text style={styles.itemOthers}>Quantity: {item.quantity}</Text>
                    <Text style={styles.itemOthers}>Supplier: {item.supplier}</Text>
                    <Text style={styles.itemOthers}>Ordered Date: {item.date}</Text>
                </View>

                {/* <View style={styles.itemStatus}>
                    <Text>{item.status}</Text>
                </View> */}
            </View>
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.myTitle}>Food Donation Entries</Text>

                <FlatList 
                    data={dataList}
                    keyExtractor={(e, i) => i.toString()}
                    renderItem={renderItem}
                />

                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("AddFood")}}>
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

export default AllFoods;