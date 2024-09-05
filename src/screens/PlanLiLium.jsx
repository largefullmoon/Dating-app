import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Platform, Image, Text, TextInput, TouchableOpacity } from 'react-native';
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
function PlanLiLium({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(1);
    if (!user || !user.verified) {
        return (
            <View
                style={{ backgroundColor: '#8BD4BE', alignItems: 'center', flex: 1 }}
            >
                <TouchableOpacity style={{ alignItems: 'center', height: 50, width: 50, position: 'absolute', left: 10, top: 30 }} onPress={() => {
                    navigation.replace("PlanList");
                }}>
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/whiteExit.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, alignItems: 'center', width: 200, height: 100, justifyContent: "center", borderWidth: 1, borderColor: "white", marginTop: 100 }} onPress={() => {
                    navigation.replace("PlanList");
                }}>
                    <Text style={{ color: "white", fontSize: 30, fontFamily: "AverageSans" }}>LILIUM</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", marginTop: 20 }}>
                    {currentSlide == 1 ?
                        <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/liliumheart.png')} />
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
                                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/roserefresh.png')} />
                                    <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Ekstra günlük yenileme hakkı</Text>
                                    <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>günlük 1 ücretsiz yenileme hakkına ek olarak 3 yenileme hakkı daha kazan</Text>
                                </View>
                                : currentSlide == 4 ?
                                    <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                                        <Image style={{ width: 50, height: 50 }} source={require('../assets/images/roseplane.png')} />
                                        <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Seyahat modu</Text>
                                        <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>Konumunu istediğin bölgeyi gösterecek şekilde ayarlayabilme hakkı kazan</Text>
                                    </View>
                                    :
                                    <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                            <View style={{ justifyContent: "center", alignItems: "flex-start", width: 50 }}>
                                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/blurframe.png')} />
                                                <Image style={{ width: 50, height: 50, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                                            </View>
                                            <View style={{ justifyContent: "center", alignItems: "flex-start", width: 50 }}>
                                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/blurframe.png')} />
                                                <Image style={{ width: 50, height: 50, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                                            </View>
                                            <View style={{ justifyContent: "center", alignItems: "flex-start", width: 50 }}>
                                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/blurframe.png')} />
                                                <Image style={{ width: 50, height: 50, position: 'absolute' }} source={require(`../assets/images/blur.png`)} />
                                            </View>
                                        </View>
                                        <Text style={{ color: "#0F4037", fontSize: 20, fontFamily: "AverageSans" }}>Haftalık boost hakkı</Text>
                                        <Text style={{ color: "#0F4037", fontSize: 15, fontFamily: "AverageSans" }}>haftalık seni diğerlerinden daha öne çıkaracak boost hakkı kazan</Text>
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
                        <Dot onPress={() => setCurrentSlide(3)} active={currentSlide == 3} />
                        <Dot onPress={() => setCurrentSlide(4)} active={currentSlide == 4} />
                        <Dot onPress={() => setCurrentSlide(5)} active={currentSlide == 5} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 350, marginTop: 10 }}>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 80, height: 130, borderRadius: 5, margin: 1, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 80, height: 130, borderRadius: 5, margin: 1, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 80, height: 130, borderRadius: 5, margin: 1, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 80, height: 130, borderRadius: 5, margin: 1, borderColor: "white", borderWidth: 1, padding: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>1</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>Ay</Text>
                            <Text style={{ color: "white", fontSize: 20, fontFamily: "AverageSans" }}>379,99 ₺</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: 10, fontFamily: "AverageSans" }}>KAZANÇ %52</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', width: 80, height: 130, borderRadius: 5, margin: 1, borderColor: "white", borderWidth: 1, padding: 5 }}>
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
                    alignItems: 'center', backgroundColor: '#8BD4BE',
                    marginTop: 80,
                    marginBottom: 50,
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
                        dispatch(selectPlan({ "plan": "liLium" , "email":user.email}));
                    }}>DEVAM ET</Text>
                </TouchableOpacity>
            </View >
        );
    }
}
export default PlanLiLium;