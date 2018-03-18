import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';
import {
    connect,
} from 'react-redux';

import List from './src/components/List';
import PlaceDetail from './src/components/PlaceDetail';

import {
    addPlace,
    deletePlace,
    selectPlace,
    deselectPlace,
} from './src/store/actions';

class App extends React.Component {
    state = {
        placeName: '',
        places: [],
        selectedPlace: null,
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
                        image: {
                            uri: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502',
                        },
                    }),
                }
            })
        }
    }
    
    onItemSelect = (key) => {
        this.setState((prevState) => ({
            selectedPlace: prevState.places.find(place => place.key === key),
        }));
    }
    
    deletePlace = () => {
        this.setState((prevState) => ({
            places: prevState.places.filter((place) => place.key !== prevState.selectedPlace.key ),
            selectedPlace: null,
        }));
    }
    
    closeModal = () => {
        this.setState({ selectedPlace: null });
    }
    
    render() {
        return (
            <View style={styles.container}>
                
                <PlaceDetail
                    onClose={this.closeModal}
                    onDelete={this.deletePlace}
                    selected={this.state.selectedPlace}
                />
                
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
                        onItemPress={this.onItemSelect}
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

const mapStateToProps = (state) => ({
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
});

const mapDispatchToProps = (dispatch) => ({
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
