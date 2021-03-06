import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';

import { addTodo, updateTodo, setTodoText, deleteTodo } from '../actions';

import Input from './Input';


export class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;
        if(todo.id)
            return this.props.dispatchUpdateTodo(todo);  

        const { text } = this.props.todo;
        this.props.dispatchAddTodo(text);
    }

    render() {
        const { text, id } = this.props.todo;
        const titleButton = id ? "save" : "add";       
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input onChangeText={text => this.onChangeText(text)} value={text}/>
                </View>    
                <View style={styles.buttonContainer}>
                    <Button title={titleButton} onPress={() => this.onPress()}/>
                </View>
            </View>    
        );
    }
}

const styles = StyleSheet.create ({
    formContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
    }
});

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(mapStateToProps, 
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo,
        dispatchDeleteTodo: deleteTodo
    })(TodoForm);