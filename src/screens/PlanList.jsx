import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CircleXFill from '../assets/images/circle-x-fill-24.svg';
import CircleCheckFill from '../assets/images/circle-check-fill-24.svg';
const APP_NAME = "tyche"
function PlanList({ navigation }) {
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
                <View style={{ alignItems: "center", justifyContent:"center", flex:1}}>
                    <View style={{justifyContent: "center", alignItems: "center", width: 350 }}>
                        <Image style={{ width: 150, height: 150}} source={require('../assets/images/frame.png')} />
                        <Image style={{ width: 150, height: 150, position: 'absolute' }} source={require('../assets/images/faces/1.png')} />
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 25,
                        width: 200,
                        height: 50,
                        padding: 5,
                        alignItems: 'center',
                        backgroundColor: '#0F4037',
                        marginTop: 10
                    }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 25 }} onPress={() => {
                        }}>Beyazıt</Text>
                    </TouchableOpacity>
                    <View style={{borderColor: "#0F4037", borderRadius: 25, borderWidth: 1, width: 300, marginTop: 10}}>
                        <View style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25,height: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor: "#0F4037" }}>
                            <Text style={{fontSize:7, width: 40, textAlign: "center"}}>Özellikler</Text>
                            <Text style={{ backgroundColor: "#D2D2D2", fontSize:7, width: 40, textAlign: "center"}}>Standart</Text>
                            <Text style={{ backgroundColor: "#B22222", fontSize:7, width: 40, textAlign: "center"}}>Rose</Text>
                            <Text style={{ backgroundColor: "#8BD4BE", fontSize:7, width: 40, textAlign: "center"}}>Platinum</Text>
                        </View>
                        <View style={{height: 30, borderColor: "#0F4037", borderWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                            <Text style={styles.td1}>Günlük beğenme sayısı</Text>
                            <Text style={styles.td2}>6</Text>
                            <Text style={styles.td3}>15</Text>
                            <Text style={styles.td4}>30</Text>
                        </View>
                        <View style={{height: 30, borderColor: "#0F4037", borderWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                            <Text style={styles.td1}>Günlük yenileme hakkı</Text>
                            <Text style={styles.td2}>4</Text>
                            <Text style={styles.td3}>4</Text>
                            <Text style={styles.td4}>6</Text>
                        </View>
                        <View style={{height: 30, borderColor: "#0F4037", borderWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                            <Text style={styles.td1}>Seni beğenenleri gör</Text>
                            <Text style={styles.td2}>X</Text>
                            <Text style={styles.td3}>X</Text>
                            <Text style={styles.td4}>✓</Text>
                        </View>
                        <View style={{height: 30, borderColor: "#0F4037", borderWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                            <Text style={styles.td1}>Haftalık boost</Text>
                            <Text style={styles.td2}>0</Text>
                            <Text style={styles.td3}>1</Text>
                            <Text style={styles.td4}>3</Text>
                        </View>
                        <View style={{height: 30, borderColor: "#0F4037", borderWidth: 1, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                            <Text style={styles.td1}>Seyahat modu</Text>
                            <Text style={styles.td2}>X</Text>
                            <Text style={styles.td3}>✓</Text>
                            <Text style={styles.td4}>✓</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        borderRadius: 25,
                        width: 200,
                        height: 50,
                        padding: 5,
                        marginTop: 10,
                        alignItems: 'center',
                        backgroundColor: '#0F4037',
                    }}>
                        <Text style={{ fontFamily: "AverageSans", fontSize: 25 }} onPress={() => {
                            navigation.replace("Chatting");
                        }}>Planını Değiştir</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 70, marginTop: 10, justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => {navigation.replace("Welcome");}} >
                        <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/user.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.replace("Welcome");}}>
                        <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/logo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.replace("Welcome");}}>
                        <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.replace("Welcome");}}>
                        <Image style={{ width: 50, height: 50, marginRight: 20 }} source={require('../assets/images/Toolbar/message.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.replace("Welcome");}}>
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/images/Toolbar/settings.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    th: {
        width: 40,
        height: 9,
        textAlign: "center",
        fontSize: 5,
        alignItems:"center",
        justifyContent: "center",
    },
    td1: {
        width: 40,
        height: 20,
        backgroundColor: "#0F4037",
        textAlign: "center",
        fontSize: 5,
        alignItems:"center",
        justifyContent: "center",
        padding: 2 
    },
    td2: {
        width: 40,
        height: 16,
        backgroundColor: "#D2D2D2",
        textAlign: "center",
        fontSize: 5,
        alignItems:"center",
        justifyContent: "center",
        padding: 5
    },
    td3: {
        width: 40,
        height: 16,
        backgroundColor: "#B22222",
        textAlign: "center",
        fontSize: 5,
        alignItems:"center",
        justifyContent: "center",
        padding: 5
    },
    td4: {
        width: 40,
        height: 16,
        backgroundColor: "#8BD4BE",
        textAlign: "center",
        fontSize: 5,
        alignItems:"center",
        justifyContent: "center",
        padding: 5
    }
})
export default PlanList;