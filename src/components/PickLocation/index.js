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
        locationChosen: false,
        focusedLocation: {
            latitude: 40.177761,
            longitude: 44.512803,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
        },
    }
    
    pickLocationHandler = (event) => {
        const {
            latitude,
            longitude,
        } = event.nativeEvent.coordinate;
        
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude,
            longitude,
        });
        
        this.setState((prevState) => ({
            focusedLocation: {
                ...prevState.focusedLocation,
                longitude,
                latitude,
            },
            locationChosen: true,
        }), this.props.onLocationPick({
            latitude,
            longitude,
        }));
    }
    
    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    },
                },
            };
            
            this.pickLocationHandler(coordsEvent);
        }, err => {
            alert('Fetching the Position failed, please pick one manually!');
        });
    }
    
    render() {
        const { focusedLocation } = this.state;
        let marker = null;
        
        if (this.state.locationChosen) {
            marker = (
                <MapView.Marker
                    coordinate={focusedLocation}
                />
            );
        }
        
        return (
            <View style={styles.container}>
                
                <MapView
                    style={styles.map}
                    ref={ref => this.map = ref}
                    initialRegion={focusedLocation}
                    onPress={this.pickLocationHandler}
                >
                    {marker}
                </MapView>
                
                <View style={styles.button}>
                    <Button
                        title="Locate Me"
                        onPress={this.getLocationHandler}
                    />
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
