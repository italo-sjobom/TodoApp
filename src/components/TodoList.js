import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) => (
    <View>
        {todos.map(todo => (
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
            />
        ))}
    </View>

);

const styles = StyleSheet.create({

})

const mapsStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapsStateToProps, 
    { 
        dispatchToggleTodo: toggleTodo,
        dispatchSetEditingTodo: setEditingTodo 
    }
)(TodoList);