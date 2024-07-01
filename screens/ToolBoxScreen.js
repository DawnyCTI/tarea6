// screens/ToolBoxScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ToolBoxScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/pexels-nemuel-6424583.jpg')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default ToolBoxScreen;
