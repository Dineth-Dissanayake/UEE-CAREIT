import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import AuthContext from "../../api/AuthContext";

const Login = () => {

    const navigation = useNavigation();
    const {loginUser} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        type: '',
        username: '',
        password: ''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!credentials.type || !credentials.username || !credentials.password) {
            alert("Please enter all required fields!");
            return;
        }
        //console.log(credentials);
        loginUser(credentials);
        if(credentials.type === 'Donor') {
            navigation.navigate("Home");
        } if (credentials.type === 'JobPoster') {
            navigation.navigate("Homejobs");
        }
        setCredentials({
            type: '',
            username: '',
            password: ''
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
                                style={{width:'100%',height:150,borderRadius:100}}
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.myTitle}>Login As</Text>
                    </View>

                    <Text style={styles.input}>Donor, NGO, JobSeeker, JobPoster</Text>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'type'}
                            value={credentials.type}
                            placeholder="Enter Your Login Type"
                            onChangeText={(text) => {
                                handleInputChange(text, 'type')
                            }}
                            style={styles.textInput}
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput 
                            name={'username'}
                            value={credentials.username}
                            onChangeText={(text) => {
                                handleInputChange(text, 'username')
                            }}
                            placeholder="Username"
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'password'}
                            value={credentials.password}
                            placeholder="Password"
                            onChangeText={(text) => {
                                handleInputChange(text, 'password')
                            }}
                            secureTextEntry
                            style={styles.textInput} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Forget")}}>
                            <Text style={{color:'black', textAlign:'right', fontSize:16, fontWeight:'bold'}} >Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={handleSubmit}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{color:'black', textAlign:'center', fontSize:16, fontWeight:'bold'}} >Don't have Account? </Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
                                <Text style={{color:'#f79616', textAlign:'center', fontSize:16, fontWeight:'bold'}} >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    myTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black'
    },
    input: {
        marginTop: 40,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        marginLeft:10
    },
    container: {
        flex: 1
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
        borderRadius: 10,
        width:200,
        marginLeft:75
    }
 });

export default Login;