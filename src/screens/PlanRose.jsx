import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Platform , Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
const Dot = ({ onPress,  active}) => (
    <TouchableOpacity style={{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: active==true?'black':'#bbb',
        marginHorizontal: 4,
    }} onPress={onPress} />
);
function PlanRose({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(1);
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#B22222', alignItems: 'center', flex: 1 }}
            >
                <View style={{ alignItems: 'center', width: 200, marginTop: 10, borderWidth: 1, borderColor: "white", marginTop: 50 }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', height: 100 }}>
                        <Image style={{ width: 80, height: 80 }} source={require('../assets/images/logo.png')} />
                        <Text style={{ fontSize: 30, fontFamily: 'Quintessential', color: '#0F4037' }}>
                            {APP_NAME}
                        </Text>
                    </View>
                    <Text style={{ color: "white", fontSize: 30, fontFamily: "AverageSans" }}>ROSE</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", marginTop: 20 }}>
                    {currentSlide == 1 ?
                        <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/roseheart.png')} />
                            <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Ekstra günlük beğenme sayısı</Text>
                            <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>günlük 3 ücretsiz beğenme sayısına ek olarak 12 beğenme sayısı daha kazan</Text>
                        </View>
                        : currentSlide == 2 ?
                            <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/roserefresh.png')} />
                                <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Ekstra günlük yenileme hakkı</Text>
                                <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>günlük 1 ücretsiz yenileme hakkına ek olarak 3 yenileme hakkı daha kazan</Text>
                            </View>
                            : currentSlide == 3 ?
                                <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/roserocket.png')} />
                                    <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Haftalık boost hakkı</Text>
                                    <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>haftalık seni diğerlerinden daha öne çıkaracak boost hakkı kazan</Text>
                                </View>
                                :
                                <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/roseplane.png')} />
                                    <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Seyahat modu</Text>
                                    <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>Konumunu istediğin bölgeyi gösterecek şekilde ayarlayabilme hakkı kazan</Text>
                                </View>
                    }
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <Dot onPress={() => setCurrentSlide(1)}  active={currentSlide==1}/>
                        <Dot onPress={() => setCurrentSlide(2)}  active={currentSlide==2}/>
                        <Dot onPress={() => setCurrentSlide(3)}  active={currentSlide==3}/>
                        <Dot onPress={() => setCurrentSlide(4)}  active={currentSlide==4}/>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 350, marginTop: 10 }}>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 120, height: 200, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 120, height: 200, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 120, height: 200, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 120, height: 200, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 120, height: 200, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 300,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#B22222',
                    marginTop: 80,
                    ...Platform.select({
                        ios: {
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                        },
                        android: {
                            elevation: 3,
                        },
                    }),
                }} >
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25, color: "white" }} onPress={() => {
                        navigation.replace("PhotoVideo");
                    }}>DEVAM ET</Text>
                </TouchableOpacity>
            </View >
        );
    }
}
export default PlanRose;