import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import Input from '../../components/UI/Input';
import Heading from '../../components/UI/Heading';
import MainText from '../../components/UI/MainText';

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
                        <Button
                            title="Switch to Login"
                            onPress={() => {}}
                        />
                        <View style={styles.inputContainer}>
                            <Input placeholder="Your Email" style={styles.input} />
                            <Input placeholder="Password" style={styles.input} />
                            <Input placeholder="Confirm Password" style={styles.input} />
                        </View>
                        <Button
                            title="Log in"
                            onPress={this.logInUser}
                        />
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
