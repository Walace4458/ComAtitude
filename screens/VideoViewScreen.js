import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubeIframe from "react-native-youtube-iframe";
import { videos } from "../Exercice/Video";
import { Feather } from "@expo/vector-icons";

const VideoViewScreen = ({ route, navigation }) => {
    const { videoId } = route.params;
    
    const video = videos.find(v => v.id === videoId);
    
    if (!video) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text>Vídeo não encontrado</Text>
                </View>
            </SafeAreaView>
        );
    }

    // Encontra próximo e anterior vídeos
    const nextVideo = videos.find(v => v.id === video.id + 1);
    const prevVideo = videos.find(v => v.id === video.id - 1);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Player do YouTube */}
                <YoutubeIframe
                    height={250}
                    videoId={video.youtubeId}
                    play={true}
                />
                
                {/* Informações do Vídeo */}
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.description}>{video.descricao}</Text>
                    <Text style={styles.duration}>Duração: {video.duracao}</Text>
                </View>

                {/* Navegação entre Vídeos */}
                <View style={styles.navigationContainer}>
                    {/* Botão Anterior */}
                    {prevVideo && (
                        <TouchableOpacity 
                            style={styles.navButton}
                            onPress={() => navigation.replace('VideoView', { 
                                videoId: prevVideo.id 
                            })}
                        >
                            <Feather name="arrow-left" size={20} color="#fff" />
                            <Text style={styles.navButtonText}>Anterior</Text>
                        </TouchableOpacity>
                    )}

                    {/* Botão Próximo */}
                    {nextVideo && (
                        <TouchableOpacity 
                            style={styles.navButton}
                            onPress={() => navigation.replace('VideoView', { 
                                videoId: nextVideo.id 
                            })}
                        >
                            <Text style={styles.navButtonText}>Próximo</Text>
                            <Feather name="arrow-right" size={20} color="#fff" />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Botão Voltar para Lista */}
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Feather name="list" size={20} color="#3b82f6" />
                    <Text style={styles.backButtonText}>Voltar para Lista</Text>
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
        flex: 1,
        backgroundColor: '#fff',
    },
    infoContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
        lineHeight: 22,
    },
    duration: {
        fontSize: 14,
        color: '#888',
        fontWeight: '500',
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    navButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        minWidth: 120,
        justifyContent: 'center',
        gap: 8,
    },
    navButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        gap: 8,
    },
    backButtonText: {
        color: '#3b82f6',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default VideoViewScreen;