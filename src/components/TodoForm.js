import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';

import { addTodo, setTodoText } from '../actions';

import Input from './Input';


export class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
       this.props.dispatchAddTodo(this.state.text);
       this.setState({ text: ''});
    }

    render() {
        const { text } = this.props.todo;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input onChangeText={text => this.onChangeText(text)} value={text}/>
                </View>    
                <View style={styles.buttonContainer}>
                    <Button title="add" onPress={() => this.onPress()}/>
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

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }

// const mapDispatchToProps = {
//     dispatchAddTodo: addTodo
// }

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(mapStateToProps, 
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText
    })(TodoForm);