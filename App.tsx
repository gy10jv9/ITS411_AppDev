import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';


type Task = {
	id: number;
	title: string;
};

const TaskSchema = {
	name: 'Task',
	properties: {
		id: 'objectId',
		title: 'string',
	},
	primaryKey: 'id',
  };

export default function App() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskTitle, setTaskTitle] = useState<string>('');

	const addTask = () => {
		if (taskTitle.trim().length === 0) return;
	
		const newTask: Task = {
		  	id: Math.random(),
		 	title: taskTitle.trim(),
		};
	
		setTasks((prevTasks) => [...prevTasks, newTask]);
		setTaskTitle('');
	};
	
	const deleteTask = (id: number) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	return (
		<View style={styles.container}>
			<Text>To-Do App</Text>
			<View>
				<TextInput
					placeholder="Enter a task"
					value={taskTitle}
					onChangeText={setTaskTitle}
				/>
				<Button title="Add Task" onPress={addTask} />
			</View>
			<FlatList
				data={tasks}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
				<View>
					<Text>{item.title}</Text>
					<Button title="Delete" onPress={() => deleteTask(item.id)} />
				</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
