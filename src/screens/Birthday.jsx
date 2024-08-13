import React, { useState } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInformation } from "../features/auth/authSlice";
const APP_NAME = "tyche"
import DatePicker from '@dietime/react-native-date-picker';
function Birthday({ setCurrentStep }) {
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();
    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are 0-indexed
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };
    return (

        <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>Doğum Günü</Text>
            <DatePicker
                onChange={(value) => setDate(value)}
                format="yyyy-mm-dd"
                fadeColor="#ECE6BF"
                textColor="black"
                markColor="#0F4037"
            />
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
                onPress={async () => {
                    await dispatch(updateUserInformation({"key":"birthday", "value":formatDate(date)}))
                    setCurrentStep("sex");
                }}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 25 }}>İLERLE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Birthday;
