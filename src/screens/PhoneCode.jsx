import React, {useEffect, useState}from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import { verifyPhoneNumber} from "../features/auth/authSlice";
function PhoneCode({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    useEffect(() => {
        navigation.replace("LoadingTycheChat");
    }, [user.isVerified])
    if (!user || !user.verified) {
        return (
            <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 40, marginBottom: 40, color:"#0F4037"}}>Doğrulama Kodu</Text>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <TextInput style={{
                        margin: 10,
                        height: 50,
                        marginVertical: 60,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 50,
                        padding: 10,
                        borderRadius: 25,
                        backgroundColor: "#FFFFFF",
                        fontSize: 25,
                    }} maxLength={1} textAlign="center" onChangeText={(text) => setValue1(text)}></TextInput>
                    <TextInput style={{
                        margin: 10,
                        height: 50,
                        marginVertical: 60,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 50,
                        padding: 10,
                        borderRadius: 25,
                        backgroundColor: "#FFFFFF",
                        fontSize: 25
                    }} maxLength={1} textAlign="center" onChangeText={(text) => setValue2(text)}></TextInput>
                    <TextInput style={{
                        margin: 10,
                        height: 50,
                        marginVertical: 60,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 50,
                        padding: 10,
                        borderRadius: 25,
                        backgroundColor: "#FFFFFF",
                        fontSize: 25
                    }} maxLength={1} textAlign="center" onChangeText={(text) => setValue3(text)}></TextInput>
                    <TextInput style={{
                        margin: 10,
                        height: 50,
                        marginVertical: 60,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 50,
                        padding: 10,
                        borderRadius: 25,
                        backgroundColor: "#FFFFFF",
                        fontSize: 25
                    }} maxLength={1} textAlign="center" onChangeText={(text) => setValue4(text)}></TextInput>
                    <TextInput style={{
                        margin: 10,
                        height: 50,
                        marginVertical: 60,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 50,
                        padding: 10,
                        borderRadius: 25,
                        backgroundColor: "#FFFFFF",
                        fontSize: 25,
                        textAlign: "center"
                    }} maxLength={1} textAlign="center" onChangeText={(text) => setValue5(text)}></TextInput>
                </View>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 180,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 40,
                    justifyContent: "center"
                }}
                    onPress={async() => {
                        console.log(user)
                        await dispatch(verifyPhoneNumber({"email": user.email, "code": ''+value1+value2+value3+value4+value5}))
                    }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25, color:"white"}}>Tekrar Gönder</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PhoneCode;
