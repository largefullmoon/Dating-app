import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
const Dot = ({ onPress }) => (
    <TouchableOpacity style={{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#bbb',
        marginHorizontal: 4,
    }} onPress={onPress} />
);
function TermsOfUse({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(1);
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginTop: 30, color: "#0F4037", fontSize: 40, fontFamily: "AverageSans" }}>Kullanım Kuralları:</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
                    {currentSlide == 1 ? <Text style={{ color: "#0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>1-Saygılı Olun: Diğer kullanıcılara karşı her zaman saygılı ve nazik davranın.</Text>
                        : currentSlide == 2 ? <Text style={{ color: "#0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>2- Gerçek Bilgiler Kullanın: Profilinizde doğru ve güncel bilgiler paylaşın.</Text>
                            : currentSlide == 3 ? <Text style={{ color: "#0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>3- Uygunsuz İçerikten Kaçının: Küfür, nefret söylemi, cinsel içerik veya taciz edici davranışlarda bulunmayın. </Text>
                                : <Text style={{ color: "#0F4037", width: 300, fontSize: 15, fontFamily: "AverageSans" }}>4- Bildirimde Bulunun: Şüpheli veya kötü niyetli davranışları bildirin.</Text>
                    }

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,  
                }}>
                    <Dot onPress={() => setCurrentSlide(1)} />
                    <Dot onPress={() => setCurrentSlide(2)} />
                    <Dot onPress={() => setCurrentSlide(3)} />
                    <Dot onPress={() => setCurrentSlide(4)} />
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
                        navigation.replace("PhotoVideo");
                    }}>ONAYLA</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent: "space-between" }}>
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/user.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/logo.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/home.png')} />
                    <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/message.png')} />
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/Toolbar/settings.png')} />
                </View>
            </View>
        );
    }
}
export default TermsOfUse;