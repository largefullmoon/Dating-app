import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
function LastName({ navigation }) {
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
                <Text style={{ fontFamily: "AverageSans", fontSize: 40 }}>Soyisim</Text>
                <TextInput style={{
                    margin: 10,
                    height: 50,
                    marginVertical: 60,
                    borderColor: 'gray',
                    borderWidth: 1,
                    width: 300,
                    padding: 10,
                    borderRadius: 25,
                    fontSize: 25,
                    fontFamily: "AverageSans",
                    backgroundColor: "#FFFFFF",
                    color: "#0F4037",
                    textAlign: "center"
                }} textAlign="center" placeholder="Koca"></TextInput>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 180,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 80,
                    justifyContent: "center"
                }}
                    onPress={() => {
                        navigation.replace("Birthday");
                    }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25 }}>İLERLE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LastName;
