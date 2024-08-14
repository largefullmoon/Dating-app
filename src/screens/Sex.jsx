import React, { useState } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box'
import {updateUserInformation} from "../features/auth/authSlice";
function Sex({ setCurrentStep }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('');
    const [isChecked, setChecked] = useState(false);
    if (!user || !user.verified) {
        return (
            <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 40, color: "#0F4037", marginBottom: 40}}>Cinsiyet</Text>
                <RNPickerSelect
                    style={{
                        inputIOS: {
                            fontSize: 16,
                            paddingVertical: 12,
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 25,
                            color: 'black',
                            paddingRight: 30, // to ensure the text is never behind the icon
                            backgroundColor: 'white'
                        },
                        inputAndroid: {
                            fontSize: 16,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderWidth: 0.5,
                            borderColor: 'purple',
                            borderRadius: 25,
                            color: 'black',
                            paddingRight: 30, // to ensure the text is never behind the icon
                            backgroundColor: 'white'
                        },
                    }}
                    onValueChange={(value) => setSelectedValue(value)}
                    items={[
                        { label: 'Erkek', value: 'male' },
                        { label: 'Kadın', value: 'female' },
                    ]}
                />
                <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
                    <CheckBox
                        style={{ marginHorizontal: 10, borderRadius: 25, color: "white"}}
                        onClick={() => {
                            setChecked(!isChecked)
                        }}
                        isChecked={isChecked}
                    />
                    <Text style={{ color: "#0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Profilimde cinsiyetimi göster</Text>
                </View>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 300,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 40,
                }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25, color:"white"}} onPress={ async () => {
                        await dispatch(updateUserInformation({"key":"sex", "value":selectedValue}))
                        await dispatch(updateUserInformation({"key":"sexProfile", "value":isChecked}))
                        setCurrentStep("birthdayPresent");
                    }}>İLERLE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Sex;
