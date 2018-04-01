import React from 'react';
import {
    View,
    Button,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {
    connect,
} from 'react-redux';

import Heading from '../../components/UI/Heading';
import MainText from '../../components/UI/MainText';
import PlaceInput from '../../components/PlaceInput';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';

import {
    addPlace,
} from '../../store/actions';

class SharePlaceScreen extends React.Component {
    static navigatorStyle = {
        navBarButtonColor: 'orange',
    }
    
    constructor(props) {
        super(props);
        
        this.state = {
            placeName: '',
            controls: {
                location: {
                    value: null,
                    valid: false,
                },
            },
        };
        
        props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    
    onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                });
            }
        }
    }
    
    createPlace = () => {
        const {
            controls,
            placeName,
        } = this.state;
        
        this.props.onAddPlace(placeName, controls.location.value);
    }
    
    setPlaceName = (placeName) => {
        this.setState({ placeName });
    }
    
    locationPickedHandler = (location) => {
        this.setState((prevState) => ({
            controls: {
                ...prevState.controls,
                location: {
                    value: location,
                    valid: true,
                },
            },
        }));
    }
    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <Heading>Share a Place with us!</Heading>
                    </MainText>
                    
                    <PickImage />
                    
                    <PickLocation onLocationPick={this.locationPickedHandler} />
                    
                    <PlaceInput
                        onChangeText={this.setPlaceName}
                        placeName={this.state.placeName}
                    />
                    
                    <View style={styles.button}>
                        <Button
                            title="Share the Place!"
                            onPress={this.createPlace}
                            disabled={!this.state.controls.location.valid}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        margin: 5,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName, location) => dispatch(addPlace(placeName, location)),
    };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
