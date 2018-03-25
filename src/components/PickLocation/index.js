import React from 'React';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

import placeholderImage from '../../../assets/milky-way.jpg';

class PickLocation extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Text>Text</Text>
                </View>
                
                <View style={styles.button}>
                    <Button title="Locate Me" onPress={() => alert('Locate Me')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    placeholder: {
        height: 150,
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eeeeee',
    },
    button: {
        margin: 5,
    },
});

export default PickLocation;
