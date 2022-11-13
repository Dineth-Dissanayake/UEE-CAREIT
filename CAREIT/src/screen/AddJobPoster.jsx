import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

import AuthContext from '../api/AuthContext';

const AddJobPoster = () => {

    const navigation = useNavigation();
    const {AddJobPoster} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        jobpostername: '',
        jobcategory: '',
        jobtype: '',
        email: '',
        mobilenumber: '',
        location: '',
        salary: '',
        description:''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if(
            !credentials.jobpostername ||
            !credentials.jobcategory ||
            !credentials.jobtype ||
            !credentials.email ||
            !credentials.mobilenumber ||
            !credentials.location ||
            !credentials.salary ||
            !credentials.description
            
        ) {
            alert("Please enter all required fields!");
            return;
        }
        AddJobPoster(credentials);
        navigation.navigate("Homejobs");
        setCredentials({
            jobpostername: '',
            jobcategory: '',
            jobtype: '',
            email: '',
            mobilenumber: '',
            location: '',
            salary: '',
            description:''
        })
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.myTitle}>Add Job Poster</Text>

                <View style={{padding:20,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'jobpostername'}
                            value={credentials.jobpostername}
                            placeholder="Enter your name"
                            onChangeText={(text) => {
                                handleInputChange(text, 'jobpostername')
                            }}
                            style={styles.textInput} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'jobcategory'}
                            value={credentials.jobcategory}
                            placeholder="Enter jobrole ex: Taxi driver"
                            onChangeText={(text) => {
                                handleInputChange(text, 'jobcategory')
                            }}
                            style={styles.textInput}
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput 
                            name={'jobtype'}
                            value={credentials.jobtype}
                            placeholder="Parttime/fulltime"
                            onChangeText={(text) => {
                                handleInputChange(text, 'jobtype')
                            }}
                            style={styles.textInput} 
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput 
                            name={'email'}
                            value={credentials.email}
                            placeholder="Enter your email"
                            onChangeText={(text) => {
                                handleInputChange(text, 'email')
                            }}
                            style={styles.textInput} 
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput 
                            name={'mobilenumber'}
                            value={credentials.mobilenumber}
                            placeholder="Enter your mobilenumber"
                            onChangeText={(text) => {
                                handleInputChange(text, 'mobilenumber')
                            }}
                            style={styles.textInput} 
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput 
                            name={'location'}
                            value={credentials.location}
                            placeholder="Enter your location"
                            onChangeText={(text) => {
                                handleInputChange(text, 'location')
                            }}
                            style={styles.textInput} 
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput 
                            name={'salary'}
                            value={credentials.salary}
                            placeholder="Enter salary in LKR"
                            onChangeText={(text) => {
                                handleInputChange(text, 'salary')
                            }}
                            style={styles.textInput} 
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput 
                            name={'description'}
                            value={credentials.description}
                            placeholder="Enter your description"
                            onChangeText={(text) => {
                                handleInputChange(text, 'description')
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
        backgroundColor: '#1e7529',
        borderRadius: 20,
        width: 150,
        marginLeft: 80,
        marginTop: 50
    }
});

export default AddJobPoster;