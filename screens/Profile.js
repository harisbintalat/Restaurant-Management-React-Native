import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchScreen from "./SearchScreen";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { Ionicons, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Profile = ({ route, navigation }) => {

    const { email } = route.params;
    const uemail = JSON.stringify(email)
    const uEmail = uemail.slice(1, -1)

    const [image, setImage] = useState(null);

    const [sName, setsName] = useState("");
    const [sEmail, setsEmail] = useState("");
    const [sPhone, setsPhone] = useState("");
    const [sAddress, setsAddress] = useState(""); 

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    };

    const getdata = () => {


        firebase.firestore().collection('Customers').where('email', '==', uEmail)
            .get().then(function (querySnapshot) {
                if (querySnapshot.size > 0) {
                    setsName(querySnapshot.docs[0].data().name)
                    setsEmail(querySnapshot.docs[0].data().email)
                    setsPhone(querySnapshot.docs[0].data().phone)
                    setsAddress(querySnapshot.docs[0].data().address)
                } else {
                    console.log("No such document!");
                }
            })
            .catch(function (error) {
                console.log("Error getting document: ", error);
            });
    }
    useEffect(() => {
        getdata()
    }, [getdata]);


    return (
        <View style={{ backgroundColor: "#F8F8FF" }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.header}>Profile Details</Text>
                    <TouchableOpacity 
                    style={{ marginLeft: 150, marginTop: 40, flexDirection: 'row' }}
                    onPress={()=>navigation.navigate("ProfileUpdate",{Uemail:email})}
                    >
                        <FontAwesome name="pencil" size={20} color="black" />
                        <Text style={{ fontWeight: "bold", marginLeft: 4 }}>EDIT</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ borderWidth: 2, borderRadius: 20 }}>
                    <TouchableOpacity style={{
                        borderRadius: 30,
                        height: 90,
                        width: 90,
                        borderWidth: 1,
                        marginTop: 10,
                        marginLeft: 120,
                        marginBottom: 20,
                        color: 'white',
                        textAlign: "center"
                    }} onPress={pickImage} >
                        <Image style={styles.logo} source={require('../assets/usericon.png')} />
                    </TouchableOpacity>
                    <View style={styles.data}>
                        <FontAwesome name="user" size={20} color="black" />
                        <Text style={styles.left}>Name</Text>
                        <TouchableOpacity><Text style={styles.right}>{sName}</Text></TouchableOpacity>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome name="envelope" size={20} color="black" />
                        <Text style={styles.left}>Email</Text>
                        <Text style={styles.right}>{sEmail}</Text>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome name="phone" size={20} color="black" />
                        <Text style={styles.left}>Phone</Text>
                        <Text style={styles.right}>{sPhone}</Text>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome name="map-marker" size={20} color="black" />
                        <Text style={styles.left}>Address</Text>
                        <Text style={styles.right}>{sAddress}</Text>
                    </View>
                </View>
                <Text style={styles.headerBottom}>General</Text>
                <View style={styles.data}>
                    <FontAwesome name="star" size={20} color="black" />
                    <TouchableOpacity><Text style={styles.left}>Rate this app</Text></TouchableOpacity>
                </View>
                <View style={{ marginLeft: 100, marginTop: 100 }}>
                    <TouchableOpacity><Text style={{ fontWeight: "bold" }}>Terms and conditions</Text></TouchableOpacity>
                    <Text style={{ marginLeft: 30 }}>Version 1.0.0</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    data: {
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 20,
        flexDirection: "row"
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20
    },
    headerBottom: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 40

    },
    left: {
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 15
    },
    right: {
        marginLeft: 100
    },
    logo: {
        height: 90,
        width: 90,

    },

});

export default Profile;


