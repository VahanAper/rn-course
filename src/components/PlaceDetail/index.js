import React from 'react';
import {
    View,
    Text,
    Modal,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = ({ selected, onDelete, onClose }) => {
    let modalContent = null;
    
    if (selected) {
        modalContent = (
            <View>
                <Image
                    source={selected.image}
                    style={styles.placeImage}
                />
                <Text style={styles.placeName}>{selected.text}</Text>
            </View>
        );
    }
    
    return (
        <Modal
            animationType="slide"
            onRequestClose={onClose}
            visible={selected !== null}
        >
            <View style={styles.modalContainer}>
                
                {modalContent}
                
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
                    <Button
                        color="grey"
                        title="Close"
                        onPress={onClose}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
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

export default placeDetail;
