import React, {useState} from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {updateUserInformation} from "../features/auth/authSlice";
const APP_NAME = "tyche"
function FirstName({ setCurrentStep }) {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    return (
        <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>İsim </Text>
            <TextInput style={{
                margin: 10,
                height: 50,
                marginVertical: 60,
                borderColor: 'gray',
                borderWidth: 1,
                width: 300,
                padding: 10,
                borderRadius: 25,
                fontSize: 25,
                fontFamily: "AverageSans",
                backgroundColor: "#FFFFFF",
                color: "#0F4037",
                textAlign: "center"
            }} textAlign="center" placeholder="Beyazıt" onChangeText={(text) => setValue(text)}></TextInput>
            <TouchableOpacity style={{
                borderRadius: 25,
                width: 180,
                height: 50,
                padding: 10,
                marginVertical: 5,
                alignItems: 'center', backgroundColor: '#0F4037',
                marginTop: 80,
                justifyContent: "center"
            }}
                onPress={async() => {
                    await dispatch(updateUserInformation({"key":"firstName", "value":value}))
                    setCurrentStep("lastName");
                }}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 25, color: "white"}}>İLERLE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FirstName;
