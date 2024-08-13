import React, { useState, useMemo } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
import {updateUserInformation} from "../features/auth/authSlice";
const APP_NAME = "tyche"
const CustomRadioButton = ({ id, label, isSelected, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(id)} style={styles.container}>
            <View style={[styles.radioCircle, isSelected && styles.selectedRadioCircle]} />
            <View style={styles.textContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0F4037',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRadioCircle: {
        borderWidth: 5,
        borderColor: '#0F4037',
    },
    textContainer: {
        flexDirection: 'column',
        width: 200,
        backgroundColor: "#0F4037",
        borderRadius: 25,
    },
    label: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        padding: 1
    }
});
function BirthdayPresent({ setCurrentStep }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: 'Kitap', // acts as primary key, should be unique and non-empty string
            label: 'Kitap',
            value: 'Kitap'
        },
        {
            id: 'El yapımı hediye',
            label: 'El yapımı hediye',
            value: 'El yapımı hediye'
        },
        {
            id: 'Aksesuar',
            label: 'Aksesuar',
            value: 'Aksesuar'
        },
        {
            id: 'Elektronik Alet',
            label: 'Elektronik Alet',
            value: 'Elektronik Alet'
        },
        {
            id: 'Konser Bileti',
            label: 'Konser Bileti',
            value: 'Konser Bileti'
        }
    ]), []);
    if (!user || !user.verified) {
        return (

            <View style={{ marginBottom: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontFamily: "AverageSans", fontSize: 15, color: '#0F4037' }}>Bir arkadaşınızın doğum {"\n"}gününde, hediye olarak {"\n"}tercih edeceğiniz şey {"\n"}seçeneklerden hangisidir?</Text>
                <View style={{ marginTop: 60 }}>
                    {radioButtons.map((button) => (
                        <CustomRadioButton
                            key={button.id}
                            id={button.id}
                            label={button.label}
                            isSelected={button.id === selectedId}
                            onPress={setSelectedId}
                        />
                    ))}
                </View>
                <TouchableOpacity style={{
                    borderRadius: 25,
                    width: 300,
                    height: 50,
                    padding: 10,
                    marginVertical: 5,
                    alignItems: 'center', backgroundColor: '#0F4037',
                    marginTop: 80,
                }}
                    onPress={async () => {
                        await dispatch(updateUserInformation({"key":"birthdayPresent", "value":selectedId}))
                        setCurrentStep("phoneNumber");
                    }}>
                    <Text style={{ fontFamily: "AverageSans", fontSize: 25, color: "white" }}>İLERLE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BirthdayPresent;
