import React, { useState } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box'
function PhoneNumber({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('');
    const [isChecked, setChecked] = useState(false);
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
                    <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>Cinsiyet</Text>
                    <RNPickerSelect
                        style={{
                            inputIOS: {
                                fontSize: 16,
                                paddingVertical: 12,
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 25,
                                color: 'black',
                                paddingRight: 30, // to ensure the text is never behind the icon
                                backgroundColor: 'white',
                            },
                            inputAndroid: {
                                fontSize: 16,
                                paddingHorizontal: 10,
                                paddingVertical: 8,
                                borderWidth: 0.5,
                                borderColor: 'purple',
                                borderRadius: 25,
                                color: 'black',
                                paddingRight: 30, // to ensure the text is never behind the icon
                                backgroundColor: 'white',
                            },
                        }}
                        onValueChange={(value) => setSelectedValue(value)}
                        items={[
                            { label: 'Erkek', value: 'male' },
                            { label: 'Kadın', value: 'female' },
                        ]}
                    />
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <CheckBox
                            style={{ marginHorizontal: 10 }}
                            onClick={() => {
                                setChecked(!isChecked)
                            }}
                            isChecked={isChecked}
                        />
                        <Text style={{ color: "##0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Profilimde cinsiyetimi göster</Text>
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
                        }}>İLERLE</Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, color: "##0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Kullanıcının gerçekten sen olduğunu doğrulamak için sana bir kod göndereceğiz.Mesaj ve veriler ücrete tabi olabilir.</Text>
                </View>
            </View>
        );
    }
}

export default PhoneNumber;
