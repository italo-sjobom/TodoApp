import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const titleButton = "delete"

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo, onPressDeleteTodo }) => ( 
	<TouchableOpacity 
        onPress={onPressTodo}
        onLongPress={onLongPressTodo}
		>
        <View style={styles.line}>
            <Text style={[
                styles.lineText,
                todo.done ? styles.lineThrough : null
            ]}>
                { todo.text }
            </Text>
			<Button title="delete" style={styles.deleteButton} onPress={onPressDeleteTodo}/>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",

		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},
	avatar: {
		aspectRatio: 1,
		flex: 1,
		marginLeft: 15,
		borderRadius: 50
    },
    lineThrough: {
        textDecorationLine: 'line-through'
	},
	deleteButton: {
        flex: 1,
    }
});

export default TodoListItem;