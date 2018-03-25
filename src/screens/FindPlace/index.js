import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    connect,
} from 'react-redux';

import List from '../../components/List';

class FindPlaceScreen extends React.Component {
    static navigatorStyle = {
        navBarButtonColor: 'orange',
    }
    
    state = {
        placesLoaded: false,
    }
    
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
    
    searchPlaces = () => {
        this.setState({ placesLoaded: true });
    }
    
    render() {
        const { placesLoaded } = this.state;
        
        let content = (
            <TouchableOpacity onPress={this.searchPlaces}>
                <View style={styles.search}>
                    <Text style={styles.text}>Search</Text>
                </View>
            </TouchableOpacity>
        );
        
        if (placesLoaded) {
            content = (
                <List
                    data={this.props.places}
                    onItemPress={this.onItemPress}
                />
            );
        }
        
        return (
            <View style={!placesLoaded ? styles.searchContainer : null}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        padding: 20,
        borderWidth: 3,
        borderRadius: 50,
        borderColor: 'orange',
    },
    text: {
        fontSize: 26,
        color: 'orange',
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => ({
    places: state.places.places,
});

export default connect(mapStateToProps)(FindPlaceScreen);
