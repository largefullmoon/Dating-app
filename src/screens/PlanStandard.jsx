import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
const BASE_URL = "https://pumped-stirred-emu.ngrok-free.app";
const APP_NAME = "tyche"
const Dot = ({ onPress, active }) => (
    <TouchableOpacity style={{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: active == true ? 'black' : '#bbb',
        marginHorizontal: 4,
    }}
        onPress={onPress}
    />
);
function PlanStandard({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const [currentSlide, setCurrentSlide] = useState(1);
    const selectPlan = async (params) => {
        const response = await axios.post(`${BASE_URL}/selectPlan`, params);
        if (response) {
            ToastAndroid.show('Plan selected!', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Something went wrong. Please try again!', ToastAndroid.SHORT);
        }
    };
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1 }}
            >
                <TouchableOpacity style={{ alignItems: 'center', height: 50, width: 50, position: 'absolute', left: 10, top: 30 }} onPress={() => {
                    navigation.replace("PlanList");
                }}>
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/exit.png')}></Image>
                </TouchableOpacity>
                <View style={{ borderRadius: 10, alignItems: 'center', width: 200, height: 100, borderWidth: 2, borderColor: "white", marginTop: 100, justifyContent: "center" }}>
                    <Text style={{ color: "#0F4037", fontSize: 30, fontFamily: "AverageSans" }}>STANDART</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", marginTop: 80 }}>
                    {currentSlide == 1 ?
                        <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/heart.png')} />
                            <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Günlük beğenme sayısı</Text>
                            <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>günlük 3 ücretsiz beğenme sayısı</Text>
                        </View>
                        :
                        <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/refresh.png')} />
                            <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Günlük beğenme sayısı</Text>
                            <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>günlük 1 ücretsiz yenileme hakkı</Text>
                        </View>
                    }
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <Dot onPress={() => setCurrentSlide(1)} active={currentSlide == 1} />
                        <Dot onPress={() => setCurrentSlide(2)} active={currentSlide == 2} />
                    </View>
                </View>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 300,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 80,
                    marginBottom: 50
                }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25, color: "white" }} onPress={async () => {
                        await selectPlan({ "plan": "standard", "email": user.email })
                    }}>DEVAM ET</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default PlanStandard;   