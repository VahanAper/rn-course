import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import Input from '../../components/UI/Input';
import Heading from '../../components/UI/Heading';
import MainText from '../../components/UI/MainText';
import Button from '../../components/UI/Button';

import startTabs from '../MainTabs/startMainTabs';

import backgroundImage from '../../../assets/milky-way.jpg';

class AuthScreen extends React.Component {
    logInUser = () => {
        startTabs();
    }

    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                <View style={styles.container}>
                        <MainText>
                            <Heading>Please Log In</Heading>
                        </MainText>
                        <Button color="#29AAF4" onPress={() => alert('Hello')}>Switch to Login</Button>
                        <View style={styles.inputContainer}>
                            <Input placeholder="Your Email" style={styles.input} />
                            <Input placeholder="Password" style={styles.input} />
                            <Input placeholder="Confirm Password" style={styles.input} />
                        </View>
                        <Button color="#29AAF4" onPress={this.logInUser}>Submit</Button>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        borderColor: '#bbbbbb',
        backgroundColor: '#eeeeee',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
    },
});

export default AuthScreen;
