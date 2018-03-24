import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    connect,
} from 'react-redux';

import PlaceInput from '../../components/PlaceInput';

import {
    addPlace,
} from '../../store/actions';

class SharePlaceScreen extends React.Component {
    constructor(props) {
        super(props);
        
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
    
    render() {
        return (
            <View>
                <PlaceInput
                    onAddPlace={this.props.onAddPlace}
                />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
