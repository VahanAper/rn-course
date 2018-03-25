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
    constructor(props) {
        super(props);
        
        this.state = {
            placeName: '',
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
        const { placeName } = this.state;
        
        if (placeName.trim() !== '') {
            this.props.onAddPlace(placeName);
        }
    }
    
    setPlaceName = (placeName) => {
        this.setState({ placeName });
    }
    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <Heading>Share a Place with us!</Heading>
                    </MainText>
                    
                    <PickImage />
                    
                    <PickLocation />
                    
                    <PlaceInput
                        onChangeText={this.setPlaceName}
                        placeName={this.state.placeName}
                    />
                    
                    <View style={styles.button}>
                        <Button title="Share the Place!" onPress={this.createPlace} />
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
        onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
