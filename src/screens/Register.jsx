import React, { useState, useRef } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import PhoneInput from "react-native-phone-number-input";
import axiosInstance from '../api/axiosInstance';
import Gmail from "./Gmail"
import FirstName from "./FirstName"
import LastName from "./LastName"
import Sex from "./Sex"
import PhoneNumber from "./PhoneNumber"
import PhoneCode from "./PhoneCode"
import Birthday from "./Birthday"
import BirthdayPresent from "./BirthdayPresent"
function Register({ navigation }) {
    const { user, userInformation } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const phoneInput = useRef < PhoneInput > (null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [currentStep, setCurrentStep] = useState("email");
    const [userData, setUserData] = useState({});

    const CurrentStepComponent = () => {
        switch (currentStep) {
            case "email":
                return <Gmail setCurrentStep={setCurrentStep}></Gmail>
            case "firstName":
                return <FirstName setCurrentStep={setCurrentStep}></FirstName>
            case "lastName":
                return <LastName setCurrentStep={setCurrentStep}></LastName>
            case "birthday":
                return <Birthday setCurrentStep={setCurrentStep}></Birthday>
            case "sex":
                return <Sex setCurrentStep={setCurrentStep}></Sex>
            case "birthdayPresent":
                return <BirthdayPresent setCurrentStep={setCurrentStep}></BirthdayPresent>
            case "phoneNumber":
                return <PhoneNumber setCurrentStep={setCurrentStep}></PhoneNumber>
            case "phoneCode":
                return <PhoneCode setCurrentStep={setCurrentStep}></PhoneCode>
            default:
                break;
        }
    }

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
                    <CurrentStepComponent></CurrentStepComponent>
                </View>
            </View>
        );
    }
}

export default Register;
