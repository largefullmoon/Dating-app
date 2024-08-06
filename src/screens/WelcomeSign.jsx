import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"

function WelcomeSign({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    if (!user || !user.verified) {
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginTop: 30, color: "#0F4037", fontSize: 40, fontFamily: "AverageSans" }}>tyche‘a hoş geldin!</Text>
                </View>
                <View>
                    <Text style={{color: "#0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Evet artık hazırsın. Her şey tamam. Sadece arkana yaslan . Senin yerine her şeyi halletmiş olacağız.Tek yapman gereken sana en uyacak kişileri seçtiğimizde aralarından seçmen olacak.</Text>
                </View>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 300,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 80,
                }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25 }} onPress={() => {
                        navigation.replace("BirthdayPresent");           
                    }}>ONAYLA</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent:"space-between"}}>
                    <Image style={{ width: 50, height: 50, marginRight: 20}} source={require('../assets/images/Toolbar/user.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/logo.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/home.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/message.png')} />
                    <Image style={{ width: 50, height: 50}} source={require('../assets/images/Toolbar/settings.png')} />
                </View>
            </View>
        );
    }
}
export default WelcomeSign;