import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View, FlatList } from 'react-native';

export default function HomeScreen() {
    const [text, onChangeText] = useState('');
    const [tasks, setTasks] = useState([]);

    // Add a new task to the list
    const addTask = () => {
        if (text.trim()) {
            setTasks([...tasks, text.trim()]);
            onChangeText('');
        }
    };

    return (
        <SafeAreaView>
            <h1>TODO List</h1>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter a task"
                />
            </View>
            <Button
                title="Add"
                onPress={addTask}
            />

            <FlatList
                data={tasks}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
    }
});