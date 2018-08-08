import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo, deleteTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo, dispatchDeleteTodo }) => (
    <View>
        {todos.map(todo => (
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
                onPressDeleteTodo={() => dispatchDeleteTodo(todo)}
            />
        ))}
    </View>

);

const mapsStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapsStateToProps, 
    { 
        dispatchToggleTodo: toggleTodo,
        dispatchSetEditingTodo: setEditingTodo,
        dispatchDeleteTodo: deleteTodo 
    }
)(TodoList);