// screens/WeatherScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherScreen = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=62170048c0254646817224158243006&q=Dominican Republic`);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchWeather();
    }, []);

    return (
        <View style={styles.container}>
            {weather ? (
                <View>
                    <Text style={styles.text}>Ubicación: {weather.location.name}</Text>
                    <Text style={styles.text}>Temperatura: {weather.current.temp_c} °C</Text>
                    <Text style={styles.text}>Condición: {weather.current.condition.text}</Text>
                </View>
            ) : (
                <Text style={styles.text}>Cargando...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});

export default WeatherScreen;
