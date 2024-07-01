// screens/UniversitiesScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Linking, StyleSheet } from 'react-native';

const UniversitiesScreen = () => {
    const [country, setCountry] = useState('');
    const [universities, setUniversities] = useState([]);

    const fetchUniversities = async () => {
        try {
            const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
            const data = await response.json();
            setUniversities(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter country"
                onChangeText={setCountry}
            />
            <Button title="Search Universities" onPress={fetchUniversities} />
            <FlatList
                data={universities}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.domain}</Text>
                        <Text style={styles.link} onPress={() => Linking.openURL(item.web_pages[0])}>{item.web_pages[0]}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 16,
    },
    link: {
        color: 'blue',
        marginTop: 5,
    },
});

export default UniversitiesScreen;
