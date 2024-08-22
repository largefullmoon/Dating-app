import React, { useState, useMemo, useEffect } from 'react';
import { ScrollView, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
const APP_NAME = "tyche"
import {chatwithAI} from "../features/auth/authSlice";
function TycheChat({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [inputValue, setValue] = useState("");
    const [chatList, setChatList] = useState([]);
    useEffect(() => {
        let history = dispatch(getAIChatHistory())
        setChatList(history)
    }, [])
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
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', marginBottom: 20 }}>
                    {chatList.map((item, index) => (
                        <View key={index} style={{ alignItems: 'flex-start', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240, marginLeft:item.isUser? "20%":""}}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>item.message</Text>
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
                        width: 20, height: 20, marginRight: 10
                    }} onPress={async() => {
                        setChatList([...chatList, {'message': inputValue, 'isUser': true}])
                        const responseAI = await dispatch(chatwithAI(inputValue))
                        setChatList([...chatList, {'message': responseAI, 'isUser': false}])
                    }}>
                        <Image style={{ width: 20, height: 20}} source={require('../assets/images/Icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default TycheChat;
