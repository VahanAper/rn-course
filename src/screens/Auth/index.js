import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends React.Component {
    logInUser = () => {
        startTabs();
    }

    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button
                    title="Log in"
                    onPress={this.logInUser}
                />
            </View>
        );
    }
}

export default AuthScreen;
