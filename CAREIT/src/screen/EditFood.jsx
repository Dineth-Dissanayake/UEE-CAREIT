import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

import AuthContext from '../api/AuthContext';

const EditFood = () => {

    const navigation = useNavigation();
    const {addFood} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        foodType: '',
        foodCount: '',
        donationWay: '',
        availability: ''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if(
            !credentials.foodType ||
            !credentials.foodCount ||
            !credentials.donationWay ||
            !credentials.availability
        ) {
            alert("Please enter all required fields!");
            return;
        }
        addFood(async () => {
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
        });
        navigation.navigate("AllFoods");
        setCredentials({
            foodType: '',
            foodCount: '',
            donationWay: '',
            availability: ''
        })
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.myTitle}>Add Food Donation</Text>

                <View style={{padding:20,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'foodType'}
                            value={credentials.foodType}
                            placeholder="Food Type"
                            onChangeText={(text) => {
                                handleInputChange(text, 'foodType')
                            }}
                            style={styles.textInput} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'foodCount'}
                            value={credentials.foodCount}
                            placeholder="Food Count(kg or Items)"
                            onChangeText={(text) => {
                                handleInputChange(text, 'foodCount')
                            }}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.txt1}>SHARING MY LOCATION</Text>
                        <Text style={styles.txt1}>CONTACT WITH NGO</Text>
                        <Text style={styles.txt1}>DELIVER TO RELEVENT PERSON</Text>
                        <TextInput 
                            name={'donationWay'}
                            value={credentials.donationWay}
                            placeholder="Donation Way"
                            onChangeText={(text) => {
                                handleInputChange(text, 'donationWay')
                            }}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'availability'}
                            value={credentials.availability}
                            placeholder="Availability"
                            onChangeText={(text) => {
                                handleInputChange(text, 'availability')
                            }}
                            style={styles.textInput}
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={onSubmit}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >ADD</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txt1: {
        fontWeight: 'bold'
    },
    myTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        marginTop: 15
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    formInput: {
        marginTop: 10,
        padding: 10
    },
    textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 10
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#f79616',
        borderRadius: 20,
        width: 150,
        marginLeft: 80,
        marginTop: 100
    }
});

export default EditFood;