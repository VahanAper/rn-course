import React from 'react';
import {
    View,
    Button,
    StyleSheet,
} from 'react-native';

import Input from '../../components/UI/Input';
import Heading from '../../components/UI/Heading';
import MainText from '../../components/UI/MainText';

import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends React.Component {
    logInUser = () => {
        startTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <MainText>
                    <Heading>Please Log In</Heading>
                </MainText>
                <Button
                    title="Switch to Login"
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
        backgroundColor: '#eeeeee',
        borderColor: '#bbbbbb',
    },
});

export default AuthScreen;
