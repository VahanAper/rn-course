import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

class SideDrawer extends React.Component {
    render() {
        return (
            <View 
                style={[
                    styles.container,
                    { width: Dimensions.get('window').width * 0.8 },
                ]}
            >
                <Text>SideDrawer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'white',
    },
});

export default SideDrawer;
