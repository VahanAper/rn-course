import React from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

const Input = (props) => (
    <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
    />
);

const styles = StyleSheet.create({
    input: {
        margin: 5,
        padding: 5,
        width: '100%',
        borderWidth: 1,
        borderColor: '#eeeeee',
    },
});

export default Input;
