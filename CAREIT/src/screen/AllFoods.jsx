import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, ListViewBase } from "react-native";


const AllFoods = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header_container}>
                    <Text style={styles.txt_main}>Foods list.length</Text>
                    <TouchableOpacity 
                        // onPress={handleVisibleModal}
                        style={styles.btnNewContainer}
                    >
                        <Text style={styles.textButton}>ADD FOOD</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="slide"
                    visible={visible}
                >
                    <SafeAreaView>
                        <View style={styles.form}>
                            <TouchableOpacity
                                //onPress={handleVisibleModal}
                            >
                                <Text style={styles.txtClose}>Close</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.text_input}
                                placeholder="Location: "
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Food Type: "
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Donation Way: "
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Availability: "
                            />
                        </View>
                    </SafeAreaView>
                </Modal>
                {/* <ScrollView>
                    {ListViewBase.map((item,index) => {
                        return (
                            <View style={styles.item_course} key={index}>
                                <View>
                                    <Text style={styles.txt_name}>{index+1}. {item.name}</Text>
                                    <Text style={styles.txt_name}>{item.location}</Text>
                                    <Text style={styles.txt_name}>{item.foodType}</Text>
                                    <Text style={styles.txt_name}>{item.donationWay}</Text>
                                    <Text style={styles.txt_name}>{item.availability}</Text>
                                    <Text style={item.status === 1 ? styles.txt_enabled : styles.txt_disabled}>{item.status === 1 ? "Enabled" : "Disabled"}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={()=>handleDelete(item)}
                                    >
                                        <Text style={styles.txt_del}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={()=>handleEdit(item)}
                                    >
                                        <Text style={styles.txt_edit}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView> */}
            </ScrollView>
        </SafeAreaView>
    )
 }


 const styles = StyleSheet.create({
 });

 export default AllFoods;