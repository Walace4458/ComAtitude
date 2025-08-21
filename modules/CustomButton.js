import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";  // 👈 Importe o hook

const CustomButtonExercice = () => {
  const navigation = useNavigation();  // 👈 Use o hook aqui

  return (
    <SafeAreaView style={styles.area}> 
      <View style={styles.Video}>
          <Feather name="video" size={32} style={styles.Icon}/>
          <Text style={styles.Titulo}>
            Video Aula
        </Text>
        <Text style={styles.Subtitulo}>
            Assista a inumeros videos explicativos, para melhorar seu atendimento
        </Text>
          <TouchableOpacity 
              style={styles.Buttonn} 
              onPress={() => navigation.navigate('Videos')}  // 👈 Funcionará agora
          >
              <Feather name="arrow-right" size={32} color="#00000" style={styles.IconButton}/>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    area:{ flex: 1, justifyContent: 'center', width: 350 },
    Video: { justifyContent: 'center', borderWidth: 2, borderRadius: 10, padding: 20, alignContent: 'center', margin: 10 },
    Titulo: { position: 'relative', bottom: 34, left: 50, fontSize: 24, fontWeight: 'bold' },
    Subtitulo: { position: 'relative', bottom: 20, textAlign: 'left', width: 244, left: 55 },
    Buttonn: { borderWidth: 2, borderRadius: 10, width: 45, padding: 5, backgroundColor: 'rgb(197, 197, 197)', left: 55, marginBottom: 6}
});

export default CustomButtonExercice;