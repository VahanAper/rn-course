import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends React.Component {
    render() {
        return (
            <View 
                style={[
                    styles.container,
                    { width: Dimensions.get('window').width * 0.8 },
                ]}
            >
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon
                            size={30}
                            color="#aaaaaa"
                            name="ios-log-out"
                            style={styles.drawerItemIcon}
                        />
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: 'white',
    },
    drawerItem: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
    },
    drawerItemIcon: {
        marginRight: 10,
    },
});

export default SideDrawer;
