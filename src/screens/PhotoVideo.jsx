import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CircleXFill from '../assets/images/circle-x-fill-24.svg';
import CircleCheckFill from '../assets/images/circle-check-fill-24.svg';
const APP_NAME = "tyche"
function PhotoVideo({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1 }}
            >
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 100, marginTop: 10 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                    <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                        {APP_NAME}
                    </Text>
                </View>
                <Text style={{ textAlign: "left", width: 350, alignItems: "flex-start", marginTop: 10, color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>Fotoğraf ve videolar</Text>
                <View style={{alignItems: "center", justifyContent: "flex-start" }}>
                    <Image style={{ width: 350 }} source={require('../assets/images/videoset.png')} />
                    <Text style={{ marginTop: 10, color: "#0F4037", width: 326, fontSize: 15, fontFamily: "AverageSans" }}>Fotoğrafları sıralamak istersen tutup sürükleyebilirsin.</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flex: 1
                }}>
                    <Image style={{ width: 40, height: 40 }} source={require('../assets/images/circle-x-fill-24.png')} />
                    <Image style={{ width: 40, height: 40 }} source={require('../assets/images/circle-check-fill-24.png')} />
                    <TouchableOpacity style={{
                        borderRadius: 25,
                        width: 200,
                        height: 50,
                        padding: 10,
                        alignItems: 'center', 
                        backgroundColor: '#0F4037',
                    }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 25 }} onPress={() => {
                            navigation.replace("PlanList");
                        }}>Fotoğraf Doğrulama</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 10, color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>En az 2 fotoğraf yüklemen gerekiyor.</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent: "space-between" }}>
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/user.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/logo.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/home.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/message.png')} />
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/Toolbar/settings.png')} />
                </View>
            </View>
        );
    }
}
export default PhotoVideo;