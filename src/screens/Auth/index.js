import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

import Input from '../../components/UI/Input';

import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends React.Component {
    logInUser = () => {
        startTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
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
