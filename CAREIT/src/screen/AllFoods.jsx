import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, Image } from "react-native";

import imagesPath from '../assets/constants/imagePath';

const data = [
    {
        foodType: 'Sugar',
        foodCount: '2Kg',
        donationWay: 'Contact with NGO',
        availability: 'Before 09-08-2022',
        status: 'Pending'
    },
    {
        foodType: 'Dhal',
        foodCount: '5Kg',
        donationWay: 'Delever Directly',
        availability: 'On or Before 19-08-2022',
        status: 'Approved'
    },
    {
        foodType: 'Pizza',
        foodCount: '2',
        donationWay: 'Delever Directly',
        availability: '09-08-2022',
        status: 'Pending'
    },
    {
        foodType: 'Rice',
        foodCount: '5Kg',
        donationWay: 'Contact with NGO',
        availability: '09-08-2022',
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
            const res = await  fetch(`http://172.28.7.93.192:8050/foods`, {
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

    // const handleDelete = (item) => {
    //     fetch ({
    //         url: "http://172.28.7.93.192:8050/food/delete/" +_id,
    //         method: "DELETE"
    //     }).then((res) => {
    //         var response = res.data;
    //         getList();
    //     })
    // }

    const renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.foodType}</Text>
                    <Text style={styles.itemOthers}>Food Count: {item.foodCount}</Text>
                    <Text style={styles.itemOthers}>Donation Way: {item.donationWay}</Text>
                    <Text style={styles.itemOthers}>Availability: {item.availability}</Text>
                    <Text style={styles.itemStatus}>{item.status}</Text>
                </View>
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
                            style={{marginTop:80, marginLeft:300, width:60, height:60}}
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