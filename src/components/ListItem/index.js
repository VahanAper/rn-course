import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
        <View style={styles.listItem}>
            <Image
                resizeMode="cover"
                style={styles.image}
                source={props.image}
            />
            
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 8,
    },
});

export default ListItem;
