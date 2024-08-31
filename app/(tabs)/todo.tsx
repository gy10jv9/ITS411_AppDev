import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, } from 'react-native';

export default function HomeScreen() {
    const [text, onChangeText] = React.useState('Useless Text');

    return (
        <SafeAreaView>
            <h1> TODO </h1>

            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});