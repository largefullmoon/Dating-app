import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
const APP_NAME = "tyche"

function LoadingTycheChat({ navigation }) {
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
                <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 15, color: '#0F4037' }}>Acele etmeyin, tyche’ın sadece 1{"\n"}adım uzakta. Bu adımda seninle kısa{"\n"}bir sohbet gerçekleştireceğiz. Bize{"\n"}ayıracağın 5 dakikan vardır umarım :)</Text>
                    <TouchableOpacity style={{
                        borderRadius: 25,
                        width: 300,
                        height: 50,
                        padding: 10,
                        marginVertical: 5,
                        alignItems: 'center', backgroundColor: '#0F4037',
                        marginTop: 80,
                    }} onPress={() => {
                        navigation.replace("TycheChat");
                    }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 25, color: "white"}}>BAŞLA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoadingTycheChat;
