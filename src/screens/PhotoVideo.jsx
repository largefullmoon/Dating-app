import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CircleXFill from '../assets/images/circle-x-fill-24.svg';
import CircleCheckFill from '../assets/images/circle-check-fill-24.svg';
const APP_NAME = "tyche"
import DocumentPicker from 'react-native-document-picker';
function PhotoVideo({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.video],
            });
            console.log('Selected file URI:', res.uri);
            uploadFile(res.uri, res.name, res.type)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled file picker');
            } else {
                throw err;
            }
        }
    };
    const uploadFile = async (fileUri, fileName, fileType) => {
        let formData = new FormData();
        formData.append('file', {
            uri: fileUri,
            name: fileName, // Or the selected file's name
            type: fileType, // Or the selected file's type
        });

        try {
            const response = await fetch('YOUR_UPLOAD_ENDPOINT', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const result = await response.json();
            console.log('Upload success:', result);
        } catch (error) {
            console.log('Upload error:', error);
        }
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
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "13%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "45%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "20%", left: "77%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "13%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 24, position: "absolute", top: "63%", left: "45%" }} onPress={() => { selectFile() }} >
                        <Image source={require('../assets/images/add_circle.png')} />
                    </TouchableOpacity>
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