import React, { useState, useRef } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import PhoneInput from "react-native-phone-number-input";
import axiosInstance from '../api/axiosInstance';
import { register, updateUserInformation} from "../features/auth/authSlice";
function PhoneNumber({ setCurrentStep }) {
    const { user, userInformation } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const phoneInput = useRef < PhoneInput > (null);
    const [value, setValue] = useState("");
    const [phoneNumner, setPhoneNumber] = useState("");
    if (!user || !user.verified) {
        return (
            <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>Telefon Numarası</Text>
                <PhoneInput
                    layout="first"
                    withDarkTheme
                    defaultCode="TR"
                    withShadow
                    autoFocus
                    containerStyle={{ borderRadius: 25 }}
                    textContainerStyle={{ fontSize: 40, height: 50, borderRadius: 25 }}
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                    }}
                />
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 300,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 80,
                }}
                    onPress={async () => {
                        await dispatch(updateUserInformation({"key":"phoneNumner", "value":phoneNumner}))
                        await dispatch(register())
                        // setCurrentStep("phoneCode");
                    }}
                >
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25 }}>İLERLE</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 10, color: "##0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Kullanıcının gerçekten sen olduğunu doğrulamak için sana bir kod göndereceğiz.Mesaj ve veriler ücrete tabi olabilir.</Text>
            </View>
        );
    }
}

export default PhoneNumber;
