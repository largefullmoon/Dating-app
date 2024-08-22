import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Svg, { Polygon } from 'react-native-svg';
const APP_NAME = "tyche"
import {chatwithUser} from "../features/auth/authSlice";
const DirectionMe = () => (
    <Svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", bottom: -8, right: -8 }}>
        <Polygon points="0,0 15,15 0,12" fill="#0F4037" />
    </Svg>
);
const DirectionYou = () => (
    <Svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", bottom: -8, left: -3 }}>
        <Polygon points="0,15 12,12 12,0" fill="white" />
    </Svg>
);
const ChatUser = ({ item, navigation }) => (
    <View style={{ margin: 5, flexDirection: "row", width: 350, justifyContent: item.from === "me" ? "flex-end" : "flex-start", }}>
        <View style={{ borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, flexDirection: "row", alignItems: "flex-end", backgroundColor: item.from === "me" ? "#0F4037" : "white" }}>
            <Text style={{ color: item.from === "me" ? "white" : "#0F4037", fontSize: 17 }}>{item.content}</Text>
            <Text style={{ color: item.from === "me" ? "white" : "#0F4037", fontSize: 12 }}>{item.time}</Text>
        </View>
        {item.from === "me" ? <DirectionMe /> : <DirectionYou />}
    </View>
);
const messages = [
    { "from": "me", "content": "Hey, ne yapıyorsunn?", "time": "12:19", "state": "✓" },
    { "from": "you", "content": "Oturuyorum sen ne yapıyorsun?", "time": "12:25", "state": "" },
    { "from": "me", "content": "Hey, ne yapıyorsunn?", "time": "12:19", "state": "✓✓" },
]
function DirectMessage({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [chatList, setChatList] = useState([]);
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1 }}
            >
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 100, width: 130, marginTop: 30 }}>
                    <View>
                        <View style={{ justifyContent: "center", alignItems: "flex-start", width: 100, marginVertical: 5 }}>
                            <Image style={{ width: 60, height: 60, marginHorizontal: 20 }} source={require('../assets/images/frame.png')} />
                            <Image style={{ width: 60, height: 60, position: 'absolute', marginHorizontal: 20 }} source={require(`../assets/images/faces/1.png`)} />
                        </View>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 10, color: "#0F4037", marginHorizontal: 20 }}>28 Mayıs Salı</Text>
                    </View>
                    <View>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 10, color: "#0F4037" }}>Beyazıt</Text>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 10, color: "#0F4037" }}>25</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    {messages.map((message, index) => (
                        <ChatUser key={index} item={message} />
                    ))}
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 30,
                    paddingLeft: 10,
                    margin: 20,
                    paddingRight: 10,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 25,
                }}>
                    <TextInput style={{
                        margin: 10,
                        height: 30,
                        marginVertical: 60,
                        borderColor: 'gray',
                        width: 250,
                        padding: 10,
                        paddingRight: 20,
                        fontSize: 10,
                        fontFamily: "AverageSans",
                        backgroundColor: "#FFFFFF",
                        color: "#0F4037",
                    }} textAlign="center" placeholder="Metin gir">
                    </TextInput>
                    <TouchableOpacity style={{
                        width: 20, height: 20, marginRight: 10
                    }} onPress={async() => {
                        setChatList([...chatList, {'message': inputValue, 'from': "me"}])
                        const responseUser = await dispatch(chatwithUser(inputValue))
                        setChatList([...chatList, {'message': responseUser, 'from': "you"}])
                    }}>
                        <Image style={{ width: 20, height: 20}} source={require('../assets/images/Icon.png')} />
                    </TouchableOpacity>
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
export default DirectMessage;