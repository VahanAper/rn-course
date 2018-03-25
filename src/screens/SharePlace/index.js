import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {
    connect,
} from 'react-redux';

import Input from '../../components/UI/Input';
import Heading from '../../components/UI/Heading';
import MainText from '../../components/UI/MainText';

import placeholderImage from '../../../assets/milky-way.jpg'

import {
    addPlace,
} from '../../store/actions';

class SharePlaceScreen extends React.Component {
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
    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <Heading>Share a Place with us!</Heading>
                    </MainText>
                    
                    <View style={styles.placeholder}>
                        <Image
                            source={placeholderImage}
                            style={styles.previewImage}
                        />
                    </View>
                    
                    <View style={styles.button}>
                        <Button title="Pick Image" />
                    </View>
                    
                    <View style={styles.placeholder}>
                        <Text>Text</Text>
                    </View>
                    
                    <View style={styles.button}>
                        <Button title="Locate Me" />
                    </View>
                    
                    <Input placeholder="Place Name" />
                    
                    <View style={styles.button}>
                        <Button title="Share the Place!" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    previewImage: {
        width: '100%',
        height: '100%',
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
