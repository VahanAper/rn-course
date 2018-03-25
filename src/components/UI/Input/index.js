import React from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

const Input = (props) => (
    <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={[ styles.input, props.style ]}
    />
);

const styles = StyleSheet.create({
    input: {
        padding: 5,
        marginTop: 5,
        width: '100%',
        borderWidth: 1,
        marginBottom: 5,
        borderColor: '#eeeeee',
    },
});

export default Input;
