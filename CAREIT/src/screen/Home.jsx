import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import imagesPath from '../assets/constants/imagePath';

const Home = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>

                <View style={styles.container}>
                    <Text style={styles.myTitle}>Welcome To CAREIT</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:50}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("AllFoods")}}>
                        <Image source={imagesPath.FoodIcon} style={{width:120,height:120,backgroundColor:'#fff',borderWidth: 2,borderColor: 'black',marginLeft:50}} />
                        <Text style={styles.input}>Food Donation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("AllBooks")}}>
                        <Image source={imagesPath.BookIcon} style={{width:120,height:120,backgroundColor:'#fff',borderWidth: 2,borderColor: 'black',marginLeft:50}} />
                        <Text style={styles.input}>Book Donation</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',marginTop:50}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("ClothsAndSanitationHome")}}>
                        <Image source={imagesPath.ClothIcon} style={{width:120,height:120,backgroundColor:'#fff',borderWidth: 2,borderColor: 'black',marginLeft:50}} />
                        <Text style={styles.input1}>Cloths & Samitary</Text>
                        <Text style={styles.input1}>Items Donation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("")}}>
                        <Image source={imagesPath.NGOIcon} style={{width:120,height:120,backgroundColor:'#fff',borderWidth: 2,borderColor: 'black',marginLeft:50}} />
                        <Text style={styles.input}>NGO'S Details</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Logout</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
 }


 const styles = StyleSheet.create({
    input: {
        marginTop: 2,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        marginLeft:50
    },
    input1: {
        marginTop: 2,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        marginLeft:30
    },
    myTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        marginTop:20
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#f79616',
        borderRadius: 10,
        width:150,
        marginLeft:115,
        marginTop:120,
    }
 });

 export default Home;