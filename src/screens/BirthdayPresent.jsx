import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
const APP_NAME = "tyche"

function BirthdayPresent({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: 'Kitap', // acts as primary key, should be unique and non-empty string
            label: 'Kitap',
            value: 'Kitap'
        },
        {
            id: 'El yapımı hediye',
            label: 'El yapımı hediye',
            value: 'El yapımı hediye'
        },
        {
            id: 'Aksesuar',
            label: 'Aksesuar',
            value: 'Aksesuar'
        },
        {
            id: 'Elektronik Alet',
            label: 'Elektronik Alet',
            value: 'Elektronik Alet'
        },
        {
            id: 'Konser Bileti',
            label: 'Konser Bileti',
            value: 'Konser Bileti'
        }
    ]), []);
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
                <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 15, color: '#0F4037' }}>Bir arkadaşınızın doğum gününde, hediye olarak tercih edeceğiniz şey seçeneklerden hangisidir?</Text>
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        layout="column"
                        selectedId={selectedId}
                        containerStyle={{alignItems: 'flex-start'}}
                    />
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
                    <Text style={{ marginTop: 10, color: "##0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Kullanıcının gerçekten sen olduğunu doğrulamak için sana bir kod göndereceğiz.Mesaj ve veriler ücrete tabi olabilir.</Text>
                </View>
            </View>
        );
    }
}

export default BirthdayPresent;
