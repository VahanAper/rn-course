import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';

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
                    <TextInput style={styles.input} placeholder="Your Email" />
                    <TextInput style={styles.input} placeholder="Password" />
                    <TextInput style={styles.input} placeholder="Confirm Password" />
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
        width: '100%',
    },
});

export default AuthScreen;
