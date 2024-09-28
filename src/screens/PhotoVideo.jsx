import React, { useState, useMemo, useEffect } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
const BASE_URL = "https://pumped-stirred-emu.ngrok-free.app"
import axios from "axios";
import DocumentPicker from 'react-native-document-picker';
function PhotoVideo({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const [photoList, setPhotoList] = useState([])
    const [photoNumber, setPhotoNumber] = useState(0)
    async function fetchData() {
        const result = await getPhotoList({ "email": user.email })
        console.log(result)
        setPhotoList(result)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const uploadPhoto = async (params) => {
        const formData = new FormData();
        const file = params['file']
        formData.append('file', {
            uri: file.uri, // The local path of the file
            name: file.name || 'photo.jpg', // Optional file name
            type: file.type || 'image/jpeg', // Optional MIME type
        });
        formData.append("email", params['email'])
        formData.append("number", photoNumber)
        try {
            const response = await axios.post(`${BASE_URL}/uploadPhoto`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchData()
        } catch (error) {
            console.error('Error uploading file:', error);
            throw new Error(error);
        }
    };
    const getPhotoList = async (userData) => {
        const response = await axios.post(`${BASE_URL}/getPhotoList`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data.photos;
    };
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
        uploadPhoto({ "email": user.email, "file": file })
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
                    <Image source={{ uri: `${BASE_URL}/getPhoto/${photoList[0]}` }} style={{ width: 100, height: 100, position: "absolute", top: "7.5%", left: "3%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "13%" }} onPress={() => {
                        setPhotoNumber(0)
                        selectFile();
                    }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/${photoList[1]}` }} style={{ width: 100, height: 100, position: "absolute", top: "7.5%", left: "35%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "45%" }} onPress={() => {
                        setPhotoNumber(1)
                        selectFile();
                    }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/${photoList[2]}` }} style={{ width: 100, height: 100, position: "absolute", top: "7.5%", left: "67%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "77%" }} onPress={() => {
                        setPhotoNumber(2)
                        selectFile();
                    }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/${photoList[3]}` }} style={{ width: 100, height: 100, position: "absolute", top: "49%", left: "3%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "13%" }} onPress={() => {
                        setPhotoNumber(3)
                        selectFile();
                    }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/${photoList[4]}` }} style={{ width: 100, height: 100, position: "absolute", top: "49%", left: "35%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "45%" }} onPress={() => {
                        setPhotoNumber(4)
                        selectFile();
                    }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: `${BASE_URL}/getPhoto/${photoList[5]}` }} style={{ width: 100, height: 100, position: "absolute", top: "49%", left: "67%" }} />
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "77%" }} onPress={() => {
                        setPhotoNumber(5)
                        selectFile();
                    }} >
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
                            // navigation.replace("PlanList");
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