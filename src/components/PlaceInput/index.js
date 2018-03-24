import React from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';

class PlaceInput extends React.Component {
    state = {
        placeName: '',
    }
    
    placeNameChangeHandler = (placeName) => {
        this.setState({ placeName });
    }
    
    placeSubmitHandler = () => {
        const { placeName } = this.state;
        
        if (placeName.trim() === '') {
            return;
        }
        
        this.props.onAddPlace(placeName);
    }
    
    render() {
        return (
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
        );
    }
}

const styles = StyleSheet.create({
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
});

export default PlaceInput;
