import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo }) => (
    <View>
        {todos.map(todo => (
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                onPressTodo={() => dispatchToggleTodo(todo.id)}
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
    { dispatchToggleTodo: toggleTodo }
)(TodoList);