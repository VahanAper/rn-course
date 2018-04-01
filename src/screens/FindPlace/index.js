import React from 'react';
import {
    View,
    Text,
    Animated,
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
        removeAnimation: new Animated.Value(1),
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
        Animated.timing(this.state.removeAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            this.setState({ placesLoaded: true });
        });
    }
    
    render() {
        const {
            placesLoaded,
            removeAnimation,
        } = this.state;
        
        let content = (
            <Animated.View
                style={{
                    opacity: removeAnimation,
                    transform: [
                        {
                            scale: removeAnimation.interpolate({
                                inputRange: [ 0, 1 ],
                                outputRange: [ 12, 1 ],
                            }),
                        },
                    ],
                }}
            >
                <TouchableOpacity onPress={this.searchPlaces}>
                    <View style={styles.search}>
                        <Text style={styles.text}>Search</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
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
