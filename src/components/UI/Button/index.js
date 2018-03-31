import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native';

const Button = (props) => {
    const content = (
        <View
            style={[
                styles.button,
                { backgroundColor: props.color },
                props.disabled ? styles.disabled : null,
            ]}
        >
            <Text
                style={props.disabled ? styles.disabledText : null}
            >
                {props.children}
            </Text>
        </View>
    );
    
    if (props.disabled) {
        return content;
    }
    
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
    },
    disabled: {
        borderColor: '#AAAAAA',
        backgroundColor: '#EEEEEE',
    },
    disabledText: {
        color: '#AAAAAA',
    },
});

export default Button;
