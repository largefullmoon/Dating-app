import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"

function Gmail({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#ECE6BF', alignItems: 'center', height: "100vh" }}
            >
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 100, marginTop: 10 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                    <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                        {APP_NAME}
                    </Text>
                </View>
                <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>E-posta Adresin</Text>
                    <TextInput style={{
                        margin : 10,
                        height: 50,
                        marginVertical: 60,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 300,
                        padding: 18,
                        borderRadius: 25,
                        fontSize: 25,
                        fontFamily:"AverageSans",
                        backgroundColor: "#FFFFFF",
                        color: "#0F4037",
                    }} textAlign="center" placeholder="********@gmail.com"></TextInput>
                    <TouchableOpacity style={{
                        borderRadius: 25,
                        width: 180,
                        height: 50,
                        padding: 18,
                        marginVertical: 5,
                        alignItems: 'center', backgroundColor: '#0F4037',
                        marginTop: 80,
                        justifyContent:"center"
                    }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 25}}>İLERLE</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 15, color: "#0F4037"}}>E-postanı doğrula, hesabına erişimini kaybetme.</Text>
                </View>
            </View>
        );
    }
}

export default Gmail;
