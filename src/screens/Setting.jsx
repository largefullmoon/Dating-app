import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CircleXFill from '../assets/images/circle-x-fill-24.svg';
import CircleCheckFill from '../assets/images/circle-check-fill-24.svg';
const APP_NAME = "tyche"
function Setting({ navigation }) {
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
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <View>
                        <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Hesap Ayarları</Text>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>Telefon Numarası</Text>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>+90 *** *** ** **</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>E-Posta</Text>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>*****@*****.com</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Bildirim Ayarları</Text>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>E-Posta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>Anlık bildirimler</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Yardım ve Destek</Text>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>Destekle iletişime geçme</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>Geri bildirim gönderme</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Kullanım koşulları ve gizlilik politikası</Text>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>Uygulamanın kullanım şartları</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 25,
                            width: 350,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#0F4037',
                            marginTop: 10
                        }}>
                            <Text style={{ fontFamily: "AverageSans", fontSize: 10 }}>Gizlilik politikası</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent: "space-around", width: 350 }}>
                    <TouchableOpacity onPress={() => { navigation.replace("PhotoVideo"); }} >
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/user.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Welcome"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/logo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Tyche"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Chatting"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/message.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.replace("Setting"); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/images/Toolbar/settings.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Setting;