import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"

function Suggest({ navigation }) {
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
                <View style={{ flex: 1 }}>

                    <View style={{ justifyContent: "center", alignItems: "flex-start", width: 350 }}>
                        <Image style={{ width: 60, height: 60 }} source={require('../assets/images/blurframe.png')} />
                        <Image style={{ width: 50, height: 50, margin: 5, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                    </View>
                    <Text style={{ textAlign: "left", width: 350, alignItems: "flex-start", marginTop: 10, color: "#0F4037", fontSize: 30, fontFamily: "AverageSans" }}>Eşleşme Önerileri</Text>
                    <View style={{ alignItems: "center", flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>
                        <View style={{ justifyContent: "center", alignItems: "center", width: 50 }}>
                            <View>
                                <Image style={{ width: 60, height: 60 }} source={require('../assets/images/blurframe.png')} />
                                <Image style={{ width: 50, height: 50, margin: 5, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                            </View>
                            <Text style={{ color: "#0F4037", fontSize: 20 }}>Ece</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", width: 50 }}>
                            <View>
                                <Image style={{ width: 60, height: 60 }} source={require('../assets/images/blurframe.png')} />
                                <Image style={{ width: 50, height: 50, margin: 5, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                            </View>
                            <Text style={{ color: "#0F4037", fontSize: 20 }}>Aslı</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", width: 50 }}>
                            <View>
                                <Image style={{ width: 60, height: 60 }} source={require('../assets/images/blurframe.png')} />
                                <Image style={{ width: 50, height: 50, margin: 5, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                            </View>
                            <Text style={{ color: "#0F4037", fontSize: 20 }}>Buse</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", width: 50 }}>
                            <View>
                                <Image style={{ width: 60, height: 60 }} source={require('../assets/images/blurframe.png')} />
                                <Image style={{ width: 50, height: 50, margin: 5, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                            </View>
                            <Text style={{ color: "#0F4037", fontSize: 20 }}>Elif</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", width: 50 }}>
                            <View>
                                <Image style={{ width: 60, height: 60 }} source={require('../assets/images/blurframe.png')} />
                                <Image style={{ width: 50, height: 50, margin: 5, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                            </View>
                            <Text style={{ color: "#0F4037", fontSize: 20 }}>Arzu</Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: "center", width: 350, alignItems: "center", marginTop: 100, color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>
                        Merhaba!{"\n"}
                        Size en uyumlu olabileceğinizi{"\n"}
                        düşündüğümüz 5 kişi öneriyoruz.{"\n"}
                        Bu kişiler arasından en çok{"\n"}
                        ilgilendiğiniz 3 kişiyi seçin.{"\n"}
                        Seçtiğiniz kişilerden biri de sizi beğenirse,{"\n"}
                        eşleşeceksiniz ve sohbet{"\n"}
                        etmeye başlayabileceksiniz.{"\n"}
                    </Text>
                </View>
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
export default Suggest;   