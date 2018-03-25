import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    connect,
} from 'react-redux';

import {
    deletePlace,
} from '../../store/actions';

class PlaceDetail extends React.Component {
    onDelete = () => {
        this.props.deletePlace(this.props.selected.key);
        this.props.navigator.pop();
    }
    
    render() {
        const { selected } = this.props;
        
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
                    <TouchableOpacity onPress={this.onDelete}>
                        <View style={styles.deleteButton}>
                            <Icon
                                size={30}
                                color="red"
                                name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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



export default connect(null, { deletePlace })(PlaceDetail);
