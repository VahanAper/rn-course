import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

export default class App extends React.Component {
    state = {
        placeName: '',
    }
    
    placeNameChangeHandler = (placeName) => {
        this.setState({ placeName });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="An awesome place"
                    style={styles.inputStyles}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                />
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
    inputStyles: {
        width: 300,
    }
});
