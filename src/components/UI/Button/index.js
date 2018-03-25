import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const Button = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[ styles.button, { backgroundColor: props.color }]}>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
    },
});

export default Button;
