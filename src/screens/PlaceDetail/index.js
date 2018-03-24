import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = ({ selected, onDelete }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={selected.image}
                    style={styles.placeImage}
                />
                <Text style={styles.placeName}>{selected.text}</Text>
            </View>
            
            <View>
                <TouchableOpacity onPress={onDelete}>
                    <View style={styles.deleteButton}>
                        <Icon
                            size={30}
                            color="red"
                            name="ios-trash"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 22,
    },
    placeImage: {
        width: '100%',
        height: 200,
    },
    placeName: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    deleteButton: {
        alignItems: 'center',
    },
});

export default PlaceDetail;
