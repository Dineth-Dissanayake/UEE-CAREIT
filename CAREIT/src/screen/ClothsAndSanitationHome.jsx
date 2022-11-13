import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Linking } from 'react-native';

const ClothsAndSanitationHome = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View>
                    <Text style={styles.myTitle}>DONATE ANY CLOTHS & SANITATION</Text>
                </View>

                <Image source={require('../assets/images/cloths.jpeg')}
                    resizeMode={'contain'}
                    style={{width:'100%',height:150,marginTop:40}}
                />

                <View>
                    <Text style={styles.myTitle2}>HOW DO YOU WANT TO DONATE?</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:50}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{navigation.navigate("")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >As a Donor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{navigation.navigate("")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >As a Social Worker</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <Text style={{color: 'blue', textAlign:'center'}}
                        onPress={()=>{navigation.navigate("AddPost")}}>
                            Or post asking for donations
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    myTitle: {
        marginTop:20,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#757575'
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#4287f5',
        borderRadius: 10
    },
    myTitle2: {
        marginTop:40,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#757575'
    },
    defaultButton1: {
        padding: 15,
        height:65,
        width:125,
        backgroundColor: '#4287f5',
        borderRadius: 10,
        marginLeft:50
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:20,
        marginTop:30
    }
 });

export default ClothsAndSanitationHome;