import React, { useState, useMemo, useEffect } from 'react';
import { ScrollView, ImageBackground, View, Image, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const BASE_URL = "https://pumped-stirred-emu.ngrok-free.app"
import axios from "axios";
const APP_NAME = "tyche"
function TycheChat({ navigation }) {
    const defaultQuestions = [
        "What is your favorite color?",
        "What is your favorite movie?",
        "What is your favorite song?",
        "What is your favorite book?",
        "What is your favorite hobby?",
    ]
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [inputValue, setValue] = useState("");
    const [questionNumber, setQuestionNumber] = useState(0);
    const [chatList, setChatList] = useState([]);
    const answerQuestion = async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/answerQuestion`, data);
            return true
        } catch (e) {
            console.log(e)
            ToastAndroid.show('Please try again!', ToastAndroid.SHORT);
            return false;
        }
    }
    useEffect(() => {
        setChatList([...chatList, { 'message': defaultQuestions[questionNumber], 'isUser': false }])
    }, [])
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1, width: "100%" }}
            >
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 100, marginTop: 10 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                    <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                        {APP_NAME}
                    </Text>
                </View>
                <ScrollView contentContainerStyle={{ alignItems: "flex-start", justifyContent: 'center', marginBottom: 20, width: "100%" }}>
                    {chatList.map((item, index) => (
                        <View
                            key={index}
                            style={{
                                marginBottom: 5
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: item.isUser ? "flex-end" : "flex-start",
                                    flexDirection: "row",
                                    width: 350,
                                    alignItems: "center",

                                }}
                            >
                                {item.isUser != true && (
                                    <Image style={{ width: 20, height: 20 }} source={require('../assets/images/logo.png')} />
                                )}
                                <Text
                                    style={{
                                        fontFamily: "AverageSans",
                                        borderRadius: 25,
                                        padding: 5,
                                        backgroundColor: "#FFFFFF",
                                        color: item.isUser ? "#0F4037" : "black",
                                        fontSize: 14,
                                        justifyContent: "flex-end",
                                        flexDirection: "row",
                                        width: 200,
                                    }}
                                >
                                    {item.message}
                                </Text>
                                {item.isUser && (
                                    <Image style={{ width: 20, height: 20 }} source={require('../assets/images/user.png')} />
                                )}
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    margin: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 25,
                }}>
                    <TextInput style={{
                        margin: 10,
                        height: 40,
                        marginVertical: 60,
                        borderColor: 'gray',
                        width: 300,
                        padding: 10,
                        paddingRight: 20,
                        fontSize: 15,
                        fontFamily: "AverageSans",
                        backgroundColor: "#FFFFFF",
                        color: "#0F4037",
                    }} textAlign="center" placeholder="Metin gir" onChangeText={(text) => setValue(text)}>
                    </TextInput>
                    <TouchableOpacity style={{
                        width: 20, height: 20, marginRight: 10, backgroundColor: "white"
                    }} onPress={async () => {
                        const postData = { 'message': inputValue, "email": user.email, "question": defaultQuestions[questionNumber] }
                        const result = await answerQuestion(postData);
                        if (result) {
                            let list = chatList
                            if (result) {
                                setChatList([...chatList, { 'message': inputValue, 'isUser': true }])
                                list.push({ 'message': inputValue, 'isUser': true })
                                let number = questionNumber + 1;
                                setQuestionNumber(number)
                                setTimeout(() => {
                                    setChatList([...list, { 'message': defaultQuestions[number], 'isUser': false }])
                                }, 1000)
                            }
                            if (list.length >= 10) {
                                navigation.replace("RegisterCompleted")
                            }
                        }
                    }}>
                        <Image style={{ width: 20, height: 20 }} source={require('../assets/images/Icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default TycheChat;