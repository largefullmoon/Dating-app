import React, { useState, useRef } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import PhoneInput from "react-native-phone-number-input";
function PhoneNumber({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const phoneInput = useRef < PhoneInput > (null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    if (!user || !user.verified) {
        return (
            <View style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 100, marginTop: 10 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                    <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                        {APP_NAME}
                    </Text>
                </View>
                <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>Telefon Numarası</Text>
                    <PhoneInput
                        // ref={phoneInput}
                        layout="second"
                        withDarkTheme
                        withShadow
                        autoFocus
                        containerStyle={{ borderRadius: 25 }}
                        textContainerStyle={{ fontSize: 40, height: 50, borderRadius: 25 }}
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
                        onPress={() => {
                            navigation.replace("PhoneCode");
                        }}
                    >
                        <Text style={{ fontFamily: "AverageSans", fontSize: 25 }}>İLERLE</Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, color: "##0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Kullanıcının gerçekten sen olduğunu doğrulamak için sana bir kod göndereceğiz.Mesaj ve veriler ücrete tabi olabilir.</Text>
                </View>
            </View>
        );
    }
}

export default PhoneNumber;
