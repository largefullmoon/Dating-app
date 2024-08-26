import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from "react-native-phone-number-input";
import { register, updateUserInformation } from "../features/auth/authSlice";

function PhoneNumber({setCurrentStep, navigation}) {
    const { user, userInformation } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const phoneInput = useRef(null);
    const [value, setValue] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    if (!user || !user.verified) {
        return (
            <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 40, marginBottom: 80, color:"#0F4037"}}>
                    Telefon Numarası
                </Text>
                <PhoneInput
                    ref={phoneInput}
                    layout="first"
                    withDarkTheme
                    defaultCode="TR"
                    withShadow
                    autoFocus
                    containerStyle={{ borderRadius: 25 }}
                    textContainerStyle={{ fontSize: 40, height: 50, borderRadius: 25 }}
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                />
                <TouchableOpacity
                    style={{
                        borderRadius: 25,
                        width: 300,
                        height: 50,
                        padding: 10,
                        marginVertical: 5,
                        alignItems: 'center',
                        backgroundColor: '#0F4037',
                        marginTop: 80,
                    }}
                    onPress={async () => {
                        const fullPhoneNumber = phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
                        setPhoneNumber(fullPhoneNumber.formattedNumber);

                        await dispatch(updateUserInformation({ "key": "phoneNumber", "value": fullPhoneNumber.formattedNumber }));
                        await dispatch(register({ "userInformation": userInformation, "phoneNumber": fullPhoneNumber.formattedNumber }));
                        setCurrentStep("phoneCode");
                    }}
                >
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25, color:"white" }}>
                        İLERLE
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 10, color: "#0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans", textAlign:"center"}}>
                    Kullanıcının gerçekten sen{"\n"}olduğunu doğrulamak için sana{"\n"}bir kod göndereceğiz.Mesaj ve{"\n"}veriler ücrete tabi olabilir.
                </Text>
            </View>
        );
    }
}

export default PhoneNumber;
