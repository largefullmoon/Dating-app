import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import { styles } from '../constants';

function PhoneNumber({ navigation }) {
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
                    <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>Telefon Numarası</Text>
                    <TextInput style={{
                        height: 40,
                        marginVertical: 60,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width:308,
                        paddingHorizontal: 10,
                        borderRadius:10,
                        placeholder:"Input PhoneNumber"
                    }}></TextInput>
                    <TouchableOpacity style={{
                        borderRadius: 25,
                        width: 300,
                        height: 50,
                        padding: 10,
                        marginVertical: 5,
                        alignItems: 'center', backgroundColor: '#0F4037',
                        marginTop: 80,
                    }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 25 }}>İLERLE</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:10, color:"##0F4037", width: 300, fontSize:15, fontFamily:"AverageSans"}}>Kullanıcının gerçekten sen olduğunu doğrulamak için sana bir kod göndereceğiz.Mesaj ve veriler ücrete tabi olabilir.</Text>
                </View>
            </View>
        );
    }
}

export default PhoneNumber;
