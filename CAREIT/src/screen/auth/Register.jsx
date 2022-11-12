import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import AuthContext from "../../api/AuthContext";

const Register = () => {

    const navigation = useNavigation();
    const {registerUser} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        type: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!credentials.type || !credentials.username || !credentials.email || !credentials.password || !credentials.confirmPassword) {
            alert("Please enter all required fields!");
            return;
        }

        if(credentials.password !== credentials.confirmPassword) {
            alert("Password do not match!");
            return;
        }
        //console.log(credentials);
        const userData = { ...credentials, confirmPassword: undefined };
        registerUser(userData);
        navigation.navigate("Login");
        setCredentials({
            type: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{padding:10,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Image source={require('../../assets/images/logo.png')}
                                resizeMode={'contain'}
                                style={{width:'100%',height:150,borderRadius:100,marginTop:-20}}
                            />
                        </View>
                    </View>

                    <Text style={styles.input}>Donor, NGO, JobSeeker, JobPoster</Text>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'type'}
                            style={styles.textInput} 
                            placeholder="Type your option"
                            value={credentials.type}
                            onChangeText={(text) => {
                                handleInputChange(text, 'type')
                            }}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            style={styles.textInput} 
                            name={'username'}
                            placeholder="Username"
                            value={credentials.username}
                            onChangeText={(text) => {
                                handleInputChange(text, 'username')
                            }}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'email'}
                            style={styles.textInput} 
                            placeholder="Email address" 
                            value={credentials.email}
                            onChangeText={(text) => {
                                handleInputChange(text, 'email')
                            }}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'password'}
                            style={styles.textInput} 
                            placeholder="Password" 
                            secureTextEntry={true} 
                            value={credentials.password}
                            onChangeText={(text) => {
                                handleInputChange(text, 'password')
                            }}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'confirmPassword'}
                            style={styles.textInput} 
                            placeholder="Confirm Password" 
                            secureTextEntry={true} 
                            value={credentials.confirmPassword}
                            onChangeText={(text) => {
                                handleInputChange(text, 'confirmPassword')
                            }}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} 
                            onPress={handleSubmit}
                        >
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Register</Text>
                        </TouchableOpacity>
                    </View>
                
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={{color:'black', textAlign:'center', fontSize:16, fontWeight:'bold'}} >
                                Already have an Account? Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        marginLeft:10
    },
    defaultBg: {
        width: '100%',
        height:120
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
        borderRadius: 10
    }
 });

export default Register;