import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ userName }) => 
(
    <SafeAreaView>
    <View style={styles.header}>
        <Text style={styles.logo}>ComAtitude</Text>
        <Text style={styles.convite}>Olá Victor{userName}, Vamos começar?</Text>
    </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    header: { padding: 20, textAlign: "center"},
    logo: { fontSize: 40, fontWeight: 'bold', fontFamily: 'Julee', color: 'black', textAlign: "center" },
    convite: { fontSize: 17, fontFamily: 'Inter', margimTop: 5, color: 'black', textAlign: "center" },
});


export default Header;