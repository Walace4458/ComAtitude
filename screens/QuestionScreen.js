import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";
import Header from "../modules/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { exercises } from "../Exercice/Exercise";
import { Feather } from "@expo/vector-icons";

const QuestionScreen = ({route, navigation}) => {
    const { id, descricao, questionId } = route.params;
    
    // Encontra o exercício correto
    const exercise = exercises.find((ex) => ex.id === id);
    
    // Se não encontrar o exercício
    if (!exercise) {
        return (
            <SafeAreaView>
                <Header />
                <View style={styles.container}>
                    <Text>Exercício não encontrado</Text>
                </View>
            </SafeAreaView>
        );
    }
    
    // Encontra a questão específica
    const question = exercise.questions.find((q) => q.id === questionId);
    
    // Se não encontrar a questão
    if (!question) {
        return (
            <SafeAreaView>
                <Header />
                <View style={styles.container}>
                    <Text>Questão não encontrada</Text>
                </View>
            </SafeAreaView>
        );
    }

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
    };

    const handleNextQuestion = () => {
        if (!selectedOption) {
            Alert.alert("Atenção", "Selecione uma opção antes de continuar!");
            return;
        }

        // Verifica se acertou
        const isCorrect = question.options.find(opt => opt.id === selectedOption)?.correct;
        
        Alert.alert(
            isCorrect ? "Correto! ✅" : "Incorreto! ❌",
            isCorrect ? "Parabéns, você acertou!" : "Tente novamente na próxima!",
            [
                {
                    text: "Próxima",
                    onPress: () => {
                        const nextQuestionId = questionId + 1;
                        // Verifica se existe próxima questão
                        if (nextQuestionId <= exercise.questions.length) {
                            navigation.replace("Question", {
                                id,
                                descricao,
                                questionId: nextQuestionId
                            });
                        } else {
                            // Volta para a tela de exercícios quando terminar
                            Alert.alert("Parabéns!", "Você completou todas as questões!");
                            navigation.goBack();
                        }
                    }
                }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.titulo}>Exercício {id} - Questão {questionId}</Text>
                <Text style={styles.desc}>{descricao}</Text>            
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                
                {question.options.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        style={[
                            styles.optionButton,
                            selectedOption === option.id && styles.selectedOption
                        ]}
                        onPress={() => handleOptionSelect(option.id)}
                    >
                        <Text style={styles.optionText}>
                            {option.id}) {option.text}
                        </Text>
                        {selectedOption === option.id && (
                            <Text style={styles.selectionIndicator}>✓</Text>
                        )}
                    </TouchableOpacity>
                ))}

                <TouchableOpacity 
                    style={[styles.nextButton, !selectedOption && styles.nextButtonDisabled]}
                    onPress={handleNextQuestion}
                    disabled={!selectedOption}
                >
                    <Text style={styles.nextButtonText}>
                        {questionId < exercise.questions.length ? "Próxima Questão" : "Finalizar"}
                    </Text>
                    <Feather name="arrow-right" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
            
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    desc: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    questionContainer: {
        padding: 20,
        flex: 1,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 30,
        textAlign: 'center',
    },
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    selectedOption: {
        backgroundColor: '#e3f2fd',
        borderColor: '#2196f3',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    selectionIndicator: {
        color: '#2196f3',
        fontWeight: 'bold',
        fontSize: 16,
    },
    nextButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196f3',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    nextButtonDisabled: {
        backgroundColor: '#ccc',
    },
    nextButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
    },
});

export default QuestionScreen;