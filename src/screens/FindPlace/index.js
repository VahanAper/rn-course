import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    connect,
} from 'react-redux';

import List from '../../components/List';

class FindPlaceScreen extends React.Component {
    onItemPress = (key) => {
        const place = this.props.places.find(place => place.key === key) || {};
        
        this.props.navigator.push({
            screen: 'rncourse.PlaceDetailScreen',
            title: place.text,
            passProps: {
                selected: place,
            },
        });
    }
    
    render() {
        return (
            <View>
                <List
                    data={this.props.places}
                    onItemPress={this.onItemPress}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    places: state.places.places,
});

export default connect(mapStateToProps)(FindPlaceScreen);
