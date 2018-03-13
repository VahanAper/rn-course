import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const ListItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.text}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        padding: 10,
        width: '100%',
        backgroundColor: '#eeeeee',
    }
});

export default ListItem;
