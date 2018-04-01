import React from 'React';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';

import placeholderImage from '../../../assets/milky-way.jpg';

class PickLocation extends React.Component {
    state = {
        focusedLocation: {
            latitude: 40.177761,
            longitude: 44.512803,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                
                <MapView
                    style={styles.map}
                    initialRegion={this.state.focusedLocation}
                />
                
                <View style={styles.button}>
                    <Button title="Locate Me" onPress={() => alert('Locate Me')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: 250,
    },
    button: {
        margin: 5,
    },
});

export default PickLocation;
