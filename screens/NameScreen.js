import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

const NameScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>Para continuar diga-nos o seu nome</Text>
      </View>
      <TextInput
        style={{
          height: 40,
          width: 160,
          borderColor: 'black',
          borderWidth: 1,
          marginBottom: 10,
          textAlign: 'center',
        }}
        defaultValue="Digite aqui o seu nome"
      />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{borderWidth: 2, borderRadius: 10, backgroundColor: "black"}}>
          <Text style={{fontSize: 24, color: 'white', padding: 8}}>Continuar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default NameScreen;
