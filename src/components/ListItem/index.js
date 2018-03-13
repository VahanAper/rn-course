import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
        <View style={styles.listItem}>
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
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
