import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';

const Heading = (props) => (
    <Text
        {...props}
        style={[ styles.heading, props.style ]}
    >
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        fontWeight: "bold",
    },
});

export default Heading;
