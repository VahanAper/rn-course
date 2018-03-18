import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';

import List from './src/components/List';

import placeImage from './assets/doh.jpg';

export default class App extends React.Component {
    state = {
        placeName: '',
        places: [],
    }
    
    placeNameChangeHandler = (placeName) => {
        this.setState({ placeName });
    }
    
    placeSubmitHandler = () => {
        if (this.state.placeName.trim()) {
            this.setState((prevState) => {
                return {
                    places: prevState.places.concat({
                        key: new Date().valueOf(),
                        text: this.state.placeName,
                        image: placeImage,
                    }),
                }
            })
        }
    }
    
    deletePlace = (key) => {
        this.setState((prevState) => ({
            places: prevState.places.filter((place) => place.key !== key ),
        }));
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.placeInput}
                        value={this.state.placeName}
                        placeholder="An awesome place"
                        onChangeText={this.placeNameChangeHandler}
                    />
                    <Button
                        title="ADD"
                        style={styles.placeButton}
                        onPress={this.placeSubmitHandler}
                    />
                </View>
                
                <View style={styles.listContainer}>
                    <List
                        data={this.state.places}
                        onItemPress={this.deletePlace}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%',
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listContainer: {
        width: '100%',
    },
});
