import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import AuthContext from '../api/AuthContext';

const AddPost = () => {

    const navigation = useNavigation();
    const {addPost} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        name:'',
        description:''
    });

    const handleInputChange = (value, name) => {
        setCredentials({...credentials, [name]:value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if(
            !credentials.name ||
            !credentials.description
        ) {
            alert("Please enter all required fields!");
            return;
        }
        addPost(credentials);
        navigation.navigate("AllPosts");
        setCredentials({
            name:'',
            description:''
        })
    };

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View>
                    <Text style={styles.myTitle}>ADD HELP SEEKER POST</Text>
                </View>

                <View style={{padding:20,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'name'}
                            value={credentials.name}
                            placeholder="Enter your name"
                            onChangeText={(text) => {
                                handleInputChange(text, 'name')
                            }} 
                            style={styles.textInput} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'description'}
                            value={credentials.description}
                            placeholder="Enter post description"
                            onChangeText={(text) => {
                                handleInputChange(text, 'description')
                            }}
                            style={styles.textInput} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={onSubmit}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >ADD POST</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    myTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#757575',
        marginLeft:10
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
        backgroundColor: '#4287f5',
        borderRadius: 10
    }
 });

export default AddPost;