import React, {useState} from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {updateUserInformation} from "../features/auth/authSlice";
const APP_NAME = "tyche"

function Gmail({setCurrentStep}) {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    return (
            <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 40, color: "#0F4037"}}>E-posta Adresin</Text>
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
                }} textAlign="center" placeholder="********@gmail.com" onChangeText={(text) => setValue(text)}></TextInput>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 180,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 80,
                    justifyContent: "center",
                }}
                    onPress={async() => {
                        await dispatch(updateUserInformation({"key":"email", "value":value}))
                        setCurrentStep("firstName")
                    }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25, color: "white"}}>İLERLE</Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: "AverageSans", fontSize: 15, color: "#0F4037" }}>E-postanı doğrula, hesabına erişimini kaybetme.</Text>
            </View>
    );
}

export default Gmail;
