// screens/AgePredictionScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';

const AgePredictionScreen = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [category, setCategory] = useState('');

    const fetchAge = async () => {
        try {
            // Realiza la llamada a la API con el nombre proporcionado
            const response = await fetch(`https://api.agify.io/?name=${name}`);
            const data = await response.json();

            // Actualiza el estado de la edad y la categoría
            setAge(data.age);
            if (data.age < 18) {
                setCategory('joven');
            } else if (data.age < 60) {
                setCategory('adulto');
            } else {
                setCategory('anciano');
            }
        } catch (error) {
            console.error('Error fetching age:', error);
        }
    };

    // Función para obtener la URL de la imagen según la categoría
    const categoryImage = (category) => {
        switch (category) {
            case 'joven':
                return 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
            case 'adulto':
                return 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
            case 'anciano':
                return 'https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
            default:
                return '';
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                onChangeText={setName}
                value={name}
            />
            <Button title="Predict Age" onPress={fetchAge} />

            {age !== null && (
                <View style={styles.result}>
                    <Text style={styles.text}>Edad: {age}</Text>
                    <Text style={styles.text}>Categoría: {category}</Text>
                    {category && (
                        <Image source={{ uri: categoryImage(category) }} style={styles.image} />
                    )}
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
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
});

export default AgePredictionScreen;
