import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import SearchScreen from "./SearchScreen";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { Ionicons, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Profile = ({ route, navigation }) => {

    const [data, setData] = useState("");
    const { email } = route.params;
    // alert(JSON.stringify(email))

    const getdata = () => {

        var UserArray = [];

        const cityRef = firebase.firestore().collection('Customers').doc(JSON.stringify(email));
        const doc = cityRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
            UserArray.push(doc.data()).then(setData(doc.data()));
            alert(doc.data())
        }

    }

    return (
        <View style={{backgroundColor:"#F5F5F5"}}>
            <View style={styles.container}>
                <Text style={styles.header}>Profile Details</Text>
                <View style={{ borderWidth: 2, borderRadius: 20 }}>
                    <View style={styles.data}>
                        <FontAwesome name="user" size={20} color="black" />
                        <Text style={styles.left}>Name</Text>
                        <Text style={styles.right}>Haris Bin Talat</Text>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome name="envelope" size={20} color="black" />
                        <Text style={styles.left}>Email</Text>
                        <Text style={styles.right}>abc@test.com</Text>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome name="phone" size={20} color="black" />
                        <Text style={styles.left}>Phone</Text>
                        <Text style={styles.right}>090078601</Text>
                    </View>
                    <View style={styles.data}>
                        <FontAwesome name="map-marker" size={20} color="black" />
                        <Text style={styles.left}>Address</Text>
                        <Text style={styles.right}>GC street</Text>
                    </View>
                </View>
                <Text style={styles.headerBottom}>General</Text>
                <View style={styles.data}>
                        <FontAwesome name="star" size={20} color="black" />
                        <TouchableOpacity><Text style={styles.left}>Rate this app</Text></TouchableOpacity>
                    </View>
                <View style={{marginLeft:100,marginTop:210}}>
                        <TouchableOpacity><Text style={{fontWeight:"bold"}}>Terms and conditions</Text></TouchableOpacity>
                        <Text style={{marginLeft:30}}>Version 1.0.0</Text>
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
        marginTop:20
    },
    headerBottom : {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop:40

    },
    left: {
        marginLeft: 20,
        fontWeight: "bold",
        fontSize:15
    },
    right: {
        marginLeft: 100
    }

});

export default Profile;


