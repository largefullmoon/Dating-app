import React, { useState } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import DatePicker from '@dietime/react-native-date-picker';
function Birthday({ navigation }) {
    const [date, setDate] = useState();
    return (
        <View
            style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1}}
        >
            <View style={{ alignItems: 'center', flexDirection: 'row', height: 100, marginTop: 10 }}>
                <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                    {APP_NAME}
                </Text>
            </View>
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
                    onPress={() => {
                        navigation.replace("Sex");
                    }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25 }}>İLERLE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Birthday;
