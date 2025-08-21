import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // opcional, fundo branco
      }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 10, fontFamily: 'Julee' }}>ComAtitude</Text>
      <Text style={{ fontSize: 20, marginBottom: 17, fontFamily: 'ComingSoon' }}>De melhorar o seu atendimento</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Name')} style={{borderWidth:1, borderRadius:10, backgroundColor: 'black'}}>
        <Text style={{ fontSize: 24, color: 'white', padding: 8}}>Continuar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;