import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"

function RegisterCompleted({ navigation }) {
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
                <Image style={{ width: 200, height: 200 }} source={require('../assets/images/back.png')} />
                <View>
                    <Text style={{ marginTop: 10, color: "##0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>Evet artık hazırsın. Her şey tamam. Sadece arkana yaslan . Senin yerine her şeyi halletmiş olacağız.Tek yapman gereken sana en uyacak kişileri seçtiğimizde aralarından seçmen olacak.</Text>
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
                </View>
            </View>
        );
    }
}
export default RegisterCompleted;