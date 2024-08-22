import React, { useState, useMemo, useEffect } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CircleXFill from '../assets/images/circle-x-fill-24.svg';
import CircleCheckFill from '../assets/images/circle-check-fill-24.svg';
const APP_NAME = "tyche"

function Chatting({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [chatUsers, setChatUsers] = useState([
        { "name": "Beyazıt", "lastMessage": "Oturuyorum sen napıyosunn", "photo": "1.png" },
        { "name": "Murat", "lastMessage": "Selamm", "photo": "1.png" },
        { "name": "Oğuz", "lastMessage": "Akrep seninn", "photo": "1.png" }
    ]);
    const ChatUser = ({ item, navigation }) => (
        <TouchableOpacity onPress={() => {
            navigation.replace("DirectMessage"); 
            dispatch(setChatUser(item.id));
        }} style={{ margin: 5, justifyContent: "center", alignItems: "center", width: 350, flexDirection: "row" }}>
            <View style={{ justifyContent: "center", alignItems: "flex-start", width: 100 }}>
                <Image style={{ width: 60, height: 60, marginHorizontal: 20 }} source={require('../assets/images/frame.png')} />
                <Image style={{ width: 60, height: 60, position: 'absolute', marginHorizontal: 20 }} source={require(`../assets/images/faces/1.png`)} />
            </View>
            <View style={{ width: 250, justifyContent: "space-between", alignItems: "flex-start" }}>
                <Text style={{ color: "#0F4037", fontSize: 10 }}>{item.name}</Text>
                <Text style={{ marginTop: 15, backgroundColor: "#0F4037", color: "white", padding: 5, borderRadius: 25, width: 250, fontSize: 10 }}>{item.lastMessage}</Text>
            </View>
        </TouchableOpacity>
    );
    useEffect(() => {
        const users = dispatch(getChatUsers())
        setChatUsers(users)
    })
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1 }}
            >
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 100, marginTop: 10 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                    <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                        {APP_NAME}
                    </Text>
                </View>
                <View style={{ alignItems: "flex-start", justifyContent: "center", width: 350 }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 40, color: "#0F4037" }}>Sohbetler</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {chatUsers.map((user, index) => (
                        <ChatUser key={index} item={user} navigation={navigation} />
                    ))}
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent: "space-around", width: 350 }}>
                    <TouchableOpacity onPress={() => { navigation.replace("User"); }} >
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/user.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Welcome"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/logo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Tyche"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Chatting"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/message.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Setting"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/settings.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Chatting;