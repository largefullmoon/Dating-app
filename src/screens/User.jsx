import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
const Dot = ({ onPress, active }) => (
    <TouchableOpacity style={{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: active == true ? 'black' : '#bbb',
        marginHorizontal: 4,
    }} onPress={onPress} />
);
function User({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(1);
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#ECE6BF', alignItems: 'center', flex: 1 }}
            >
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 100 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                    <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                        {APP_NAME}
                    </Text>
                </View>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', width: 350 }}>
                    <Text style={{ marginTop: 30, color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Samet , 24</Text>
                </View>
                <View style={{alignItems: "center", justifyContent: "flex-start" }}>
                    {currentSlide == 1 ?
                        <Image style={{ width: 234, height: 306 }} source={require('../assets/images/users/1.png')} />
                        :
                        currentSlide == 2 ?
                            <Image style={{ width: 234, height: 306 }} source={require('../assets/images/users/2.png')} />
                            :
                            currentSlide == 3 ?
                                <Image style={{ width: 234, height: 306 }} source={require('../assets/images/users/3.png')} />
                                :
                                currentSlide == 4 ?
                                    <Image style={{ width: 234, height: 306 }} source={require('../assets/images/users/4.png')} />
                                    :
                                    currentSlide == 5 ?
                                        <Image style={{ width: 234, height: 306 }} source={require('../assets/images/users/5.png')} />
                                        :
                                        <Image style={{ width: 234, height: 306 }} source={require('../assets/images/users/6.png')} />
                    }
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <Dot onPress={() => setCurrentSlide(1)} active={currentSlide == 1} />
                        <Dot onPress={() => setCurrentSlide(2)} active={currentSlide == 2} />
                        <Dot onPress={() => setCurrentSlide(3)} active={currentSlide == 3} />
                        <Dot onPress={() => setCurrentSlide(4)} active={currentSlide == 4} />
                        <Dot onPress={() => setCurrentSlide(5)} active={currentSlide == 5} />
                        <Dot onPress={() => setCurrentSlide(6)} active={currentSlide == 6} />
                    </View>
                    <View style={{
                        width: 300,
                        marginVertical: 5,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity  style={{ width: 60, height: 50 }} onPress={() => {
                            navigator.replace("Setting")
                        }}>
                            <Image style={{ width: 60, height: 50 }} source={require('../assets/images/check.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={{ width: 60, height: 50 }} onPress={() => {
                            dispatch(saveAvatar(currentSlide))
                        }}>
                            <Image style={{ width: 60, height: 50 }} source={require('../assets/images/times.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent: "space-around", width: 350 }}>
                    <TouchableOpacity onPress={() => { navigation.replace("PhotoVideo"); }} >
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
export default User;   