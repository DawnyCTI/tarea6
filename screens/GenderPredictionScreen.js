// screens/GenderPredictionScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const GenderPredictionScreen = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const fetchGender = async () => {
        try {
            const response = await fetch(`https://api.genderize.io/?name=${name}`);
            const data = await response.json();
            setGender(data.gender);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                onChangeText={setName}
            />
            <Button title="Predict Gender" onPress={fetchGender} />
            {gender && (
                <View style={[styles.result, { backgroundColor: gender === 'male' ? 'blue' : 'pink' }]}>
                    <Text style={styles.text}>{gender}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    result: {
        padding: 10,
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default GenderPredictionScreen;
