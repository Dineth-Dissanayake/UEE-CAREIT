import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

import AuthContext from '../api/AuthContext';

const AddBook = () => {

    const navigation = useNavigation();
    const {addBook} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        bookType: '',
        bookCount: '',
        donationWay: '',
        availability: ''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if(
            !credentials.bookType ||
            !credentials.bookCount ||
            !credentials.donationWay ||
            !credentials.availability
        ) {
            alert("Please enter all required fields!");
            return;
        }
        addBook(credentials);
        navigation.navigate("AllBooks");
        setCredentials({
            bookType: '',
            bookCount: '',
            donationWay: '',
            availability: ''
        })
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.myTitle}>Add Book Donation</Text>

                <View style={{padding:20,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'bookType'}
                            value={credentials.bookType}
                            placeholder="Book Type"
                            onChangeText={(text) => {
                                handleInputChange(text, 'bookType')
                            }}
                            style={styles.textInput} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'bookCount'}
                            value={credentials.bookCount}
                            placeholder="Book Count(Items)"
                            onChangeText={(text) => {
                                handleInputChange(text, 'bookCount')
                            }}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.formInput}>
                        {/* <Text style={styles.txt1}>SHARING MY LOCATION</Text> */}
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

export default AddBook;