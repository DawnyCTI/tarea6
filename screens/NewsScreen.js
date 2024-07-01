// screens/NewsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Linking, Button } from 'react-native';

const NewsScreen = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Reemplaza la URL con el endpoint correcto de las publicaciones de WordPress
                const response = await fetch('https://hvc.com.do/wp-json/wp/v2/posts');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={news}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title.rendered}</Text>
                        <Text>{item.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}</Text>
                        <Button title="Visitar" onPress={() => Linking.openURL(item.link)} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NewsScreen;
