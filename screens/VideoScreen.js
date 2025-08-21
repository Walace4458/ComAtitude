import React from "react";
import { Text, TouchableOpacity, ScrollView, StyleSheet, Image, View} from "react-native";
import { videos } from "../Exercice/Video";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../modules/Header";

const VideoScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safe}> 
            <Header />
            <ScrollView style={styles.scrollView}>
                {videos.map(video =>(
                    <TouchableOpacity 
                        key={video.id} 
                        onPress={() => navigation.navigate("VideoView", { videoId: video.id })} 
                        style={styles.item}
                    >
                        <Image 
                            source={{ uri: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` }} 
                            style={styles.thumbnail} 
                        />
                        <View style={styles.container}>
                            <Text style={styles.title}>{video.title}</Text>
                            <Text style={styles.desc}>{video.descricao}</Text>
                            <Text style={styles.duration}>Duração: {video.duracao}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    safe: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        padding: 16,
    },
    item: {
        flexDirection: "column",
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 14,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    thumbnail: {
        width: '100%',        
        height: 200,          
        borderRadius: 12,     
        marginBottom: 12,     
        resizeMode: 'cover',  
    },
    container: {
        padding: 5,
    },
    title: {
        fontSize: 18,         
        fontWeight: "bold",
        marginBottom: 8,
        color: '#333',
    },
    desc: {
        fontSize: 14,
        padding: 4,
        fontWeight: 'normal', 
        color: '#666',
        marginBottom: 8,
        lineHeight: 20,       
    },
    duration: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#888',
    }
})

export default VideoScreen;