import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({ onChangeText, value }) => (
    <TextInput style={StyleSheet.input} onChangeText={onChangeText} value={value}/>
);

const styles = StyleSheet.create ({
    input: {
        paddingLeft: 15,
        paddingBottom: 15,
    }
});

export default Input;