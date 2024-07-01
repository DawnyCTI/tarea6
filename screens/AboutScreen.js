// screens/AboutScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/foto.jpeg')} style={styles.image} />
            <Text style={styles.text}>Nombre: Dawny Chalas telemaco</Text>
            <Text style={styles.text}>Email: dawnychalastelemaco@gmail.com</Text>
            <Text style={styles.text}>Teléfono: +1 829-821-0483</Text>
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
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default AboutScreen;
