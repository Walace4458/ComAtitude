import React from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../modules/Header";
import { Feather } from "@expo/vector-icons";

const ExerciseScreen = ({ navigation }) => {
  const exercicios = [
    { id: 1, descricao: "Verifique seu conhecimento do Exercício 1", feito: true },
    { id: 2, descricao: "Verifique seu conhecimento do Exercício 2", feito: true },
    { id: 3, descricao: "Verifique seu conhecimento do Exercício 3", feito: true },
    { id: 4, descricao: "Verifique seu conhecimento do Exercício 4", feito: false },
    { id: 5, descricao: "Verifique seu conhecimento do Exercício 5", feito: false },
  ];

  const handleExercisePress = (ex) => {
    // Navega para a primeira questão do exercício
    navigation.navigate("Question", { 
      id: ex.id, 
      descricao: ex.descricao,
      questionId: 1 // SEMPRE começa na questão 1
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}> Exercícios </Text>
          <Text style={styles.subtitulo}>Verifique seu aprendizado aqui!</Text>

          {exercicios.map((ex) => (
            <TouchableOpacity
              key={ex.id}
              style={styles.item}
              onPress={() => handleExercisePress(ex)}
            >
              {/* Linha superior: Ícone + Nome + Botão de status */}
              <View style={styles.topRow}>
                <View style={styles.titleRow}>
                  <Feather name="alert-circle" size={24} color="#333" style={styles.icon} />
                  <Text style={styles.nome}>Exercício {ex.id}</Text>
                </View>
                <View
                  style={[
                    styles.status,
                    { backgroundColor: ex.feito ? "#22c55e" : "#333" },
                  ]}
                >
                  <Text style={styles.statusTexto}>
                    {ex.feito ? "Feito" : "Pendente"}
                  </Text>
                </View>
              </View>

              {/* Descrição */}
              <Text style={styles.descricao}>{ex.descricao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
    left: 8,
  },
  item: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#666",
  },
  status: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  statusTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ExerciseScreen;