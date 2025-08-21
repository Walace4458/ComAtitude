import React from "react";
import { View } from 'react-native';
import ProgressBar from "../modules/ProgressBar";
import Header from "../modules/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../modules/CustomButton";
import CustomButtonExercice from "../modules/CustomButtonExercice";

const HomeScreen = ({ navigation }) => {  
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{padding: 10, alignItems: "center"}}>
            <Header />
        </View>
        
        <View style={{flex: 1, alignItems: "center", padding: 40}}>
          <ProgressBar />
        </View>

        <View style={{flex: 1, alignItems: "center", position: 'relative', bottom: 55}}>
          <CustomButton navigation={navigation} />  
        </View>

        <View style={{flex: 1, alignItems: "center", position: 'relative', bottom: 55}}>
          <CustomButtonExercice navigation={navigation} />  
        </View>
    </SafeAreaView>  
  );
};

export default HomeScreen;