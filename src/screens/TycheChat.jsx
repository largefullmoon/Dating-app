import React, { useState, useMemo } from 'react';
import { ScrollView, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
const APP_NAME = "tyche"

function TycheChat({ navigation }) {
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
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', marginBottom: 20 }}>
                    <View style={{ alignItems: 'flex-start', backgroundColor: "#FFFFFF", padding: 4, width: 240 }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240, marginLeft: "20%" }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240 }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240, marginLeft: "20%" }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240 }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240, marginLeft: "20%" }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240 }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', marginTop: 10, backgroundColor: "#FFFFFF", padding: 4, width: 240, marginLeft: "20%" }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 11 }}>Selamlar, tanıştığıma memnun oldum Murat. Bana biraz kendinden bahseder misin? Nasıl birisin; neler yapıyorsun; ve en önemlisi bu uygulamayı ne amaçla kullanacaksın. Lütfen rahat ol, sadece aramızda :)</Text>
                    </View>
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    margin: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 25,
                }}>
                    <TextInput style={{
                        margin: 10,
                        height: 40,
                        marginVertical: 60,
                        borderColor: 'gray',
                        width: 300,
                        padding: 10,
                        paddingRight: 20,
                        fontSize: 15,
                        fontFamily: "AverageSans",
                        backgroundColor: "#FFFFFF",
                        color: "#0F4037",
                    }} textAlign="center" placeholder="Metin gir">
                    </TextInput>
                    <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/images/Icon.png')} />
                </View>
            </View>
        );
    }
}

export default TycheChat;
