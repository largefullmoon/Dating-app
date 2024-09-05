import React, { useState, useMemo, useEffect } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CircleXFill from '../assets/images/circle-x-fill-24.svg';
import CircleCheckFill from '../assets/images/circle-check-fill-24.svg';
const APP_NAME = "tyche"
const BASE_URL = "https://pumped-stirred-emu.ngrok-free.app"
import DocumentPicker from 'react-native-document-picker';
import { uploadPhoto, getPhotoList } from "../features/auth/authSlice";
function PhotoVideo({ navigation }) {
    const { user, photoList } = useSelector((state) => state.auth);
    useEffect(() => {
        async function fetchData() {
            await dispatch(getPhotoList(user))
        }
        fetchData()
    }, [])
    const dispatch = useDispatch();
    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.video],
            });
            const file = Array.isArray(res) ? res[0] : res;
            uploadFile(file)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled file picker');
            } else {
                throw err;
            }
        }
    };
    const uploadFile = async (file) => {
        dispatch(uploadPhoto(file))
    };
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
                <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                    <Image style={{ width: 350 }} source={require('../assets/images/videoset.png')} />
                    <Image source={{ uri: `${BASE_URL}/getPhoto/1.jpg` }} style={{ width: 100, height: 100, position: "absolute", top: "7.5%", left: "3%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "13%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/2.jpg` }} style={{ width: 100, height: 100, position: "absolute", top: "7.5%", left: "35%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "45%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/4.png` }} style={{ width: 100, height: 100, position: "absolute", top: "7.5%", left: "67%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "77%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/1.jpg` }} style={{ width: 100, height: 100, position: "absolute", top: "49%", left: "3%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "13%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/3.png` }} style={{ width: 100, height: 100, position: "absolute", top: "49%", left: "35%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "45%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/2.jpg` }} style={{ width: 100, height: 100, position: "absolute", top: "49%", left: "67%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "77%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
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
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent: "space-around", width: 350 }}>
                    <TouchableOpacity onPress={() => { navigation.replace("User"); }} >
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
export default PhotoVideo;