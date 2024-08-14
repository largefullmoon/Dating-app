import React from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const APP_NAME = "tyche"
import { styles } from '../constants';

function Welcome({ navigation }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (!user || !user.verified) {
    return (
      <ImageBackground
        source={require('../assets/images/splash.png')}
        style={styles.container}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/images/logo.png')} />
          <Text style={{ fontSize: 60, fontFamily: 'Quintessential', color: '#0F4037' }}>
            {APP_NAME}
          </Text>
        </View>
        <View style={{ marginBottom: 20, alignItems: 'center' }}>
          <TouchableOpacity style={{
            borderRadius: 25,
            width: 300,
            height: 50,
            padding: 10,
            marginVertical: 5,
            alignItems: 'center', backgroundColor: '#3153BB',
            flexDirection: 'row', justifyContent: "space-between"
          }}>
            <Image style={{ width: 30, height: 30 }} source={require('../assets/images/apple.png')} />
            <Text style={{
              fontSize: 18,
              width: 250,
              fontFamily: 'AverageSans',
              color: '#FFFFFF',
              textAlign: "center"
            }}>Apple ile Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            borderRadius: 25, 
            width: 300,
            height: 70,
            padding: 10,
            marginVertical: 5,
            alignItems: 'center', backgroundColor: '#0F4037',
            flexDirection: 'row', justifyContent: "space-between"
          }}
            onPress={() => {
              navigation.replace("Register");
            }}>
            <Image style={{ width: 30, height: 30 }} source={require('../assets/images/phone.png')} />
            <Text style={{
              fontSize: 18,
              width: 250,
              fontFamily: 'AverageSans',
              color: '#FFFFFF',textAlign: "center"
            }}>Telefon Numarası ile{"\n"}Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Welcome;
