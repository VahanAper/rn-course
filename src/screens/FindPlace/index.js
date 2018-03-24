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
    render() {
        return (
            <View>
                <List
                    data={this.props.places}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    places: state.places.places,
});

export default connect(mapStateToProps)(FindPlaceScreen);
