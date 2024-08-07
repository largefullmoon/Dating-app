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
            alignItems: 'center', backgroundColor: '#0F4037'
          }}>
            <Text style={{
              fontSize: 18,
              fontFamily: 'AverageSans',
              color: '#FFFFFF',
            }}>Apple ile Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            borderRadius: 25,
            width: 300,
            height: 50,
            padding: 10,
            marginVertical: 5,
            alignItems: 'center', backgroundColor: '#3153BB'
          }}>
            <Text style={{
              fontSize: 18,
              fontFamily: 'AverageSans',
              color: '#FFFFFF',
            }}>Facebook ile Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            borderRadius: 25,
            width: 300,
            height: 60,
            padding: 10,
            marginVertical: 5,
            alignItems: 'center', backgroundColor: '#0F4037'
          }}
            onPress={() => {
              navigation.replace("Suggest");
            }}>
            <Text style={{
              fontSize: 18,
              fontFamily: 'AverageSans',
              color: '#FFFFFF',
            }}>Telefon Numarası ile</Text>
            <Text style={{
              fontSize: 18,
              fontFamily: 'AverageSans',
              color: '#FFFFFF',
            }}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Welcome;
