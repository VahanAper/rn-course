import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
} from 'react-native';

import Input from '../../components/UI/Input';
import Heading from '../../components/UI/Heading';
import MainText from '../../components/UI/MainText';
import Button from '../../components/UI/Button';

import startTabs from '../MainTabs/startMainTabs';
import validate from '../../utility/validation';

import backgroundImage from '../../../assets/milky-way.jpg';

class AuthScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            controls: {
                email: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isEmail: true,
                    },
                },
                password: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minLength: 6,
                    },
                },
                confirmPassword: {
                    value: '',
                    valid: false,
                    validationRules: {
                        equalTo: 'password',
                    },
                },
            },
            isShortHeight: this.isShortHeight(),
        };
        
        Dimensions.addEventListener('change', this.getOrientation);
    }
    
    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.getOrientation);
    }
    
    getOrientation = () => {
        this.setState({ isShortHeight: this.isShortHeight() });
    }
    
    isShortHeight = () => {
        return Dimensions.get('window').height < 550;
    }
    
    logInUser = () => {
        startTabs();
    }
    
    updateInputState = (key, value) => {
        const equalControl = this.state.controls[key].validationRules.equalTo;
        let connectedValue = {};
        
        if (equalControl) {
            const equalValue = this.state.controls[equalControl].value;
            
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue,
            };
        }
        
        if (key === 'password') {
            connectedValue = {
                ...connectedValue,
                equalTo: value,
            };
        }
        
        this.setState(prevState => ({
            controls: {
                ...prevState.controls,
                confirmPassword: {
                    ...prevState.controls.confirmPassword,
                    valid: key === 'password'
                    ? validate(
                        prevState.controls.confirmPassword.value,
                        prevState.controls.confirmPassword.validationRules,
                        connectedValue,
                    )
                    : prevState.controls.confirmPassword.valid,
                },
                [key]: {
                    ...prevState.controls[key],
                    value,
                    valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                },
            },
        }));
    }

    render() {
        const { isShortHeight } = this.state;
        const {
            portraitInput,
            landscapeInput,
            portraitContainer,
            landscapeContainer,
        } = styles;
        
        let headingText = null;
        
        if (!isShortHeight) {
            headingText = (
                <MainText>
                    <Heading>Please Log In</Heading>
                </MainText>
            );
        }
        
        return (
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                <View style={styles.container}>
                    
                    {headingText}
                    
                    <Button color="#29AAF4" onPress={() => {}}>Switch to Login</Button>
                    
                    <View style={styles.inputContainer}>
                        <Input
                            style={styles.input}
                            placeholder="Your Email"
                            value={this.state.controls.email.value}
                            onChangeText={(value) => this.updateInputState('email', value)}
                        />
                        
                        <View style={isShortHeight ? portraitContainer : landscapeContainer}>
                            <View style={isShortHeight ? portraitInput : landscapeInput}>
                                <Input
                                    style={styles.input}
                                    placeholder="Password"
                                    value={this.state.controls.password.value}
                                    onChangeText={(value) => this.updateInputState('password', value)}
                                />
                            </View>
                            
                            <View style={isShortHeight ? portraitInput : landscapeInput}>
                                <Input
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText={(value) => this.updateInputState('confirmPassword', value)}
                                />
                            </View>
                        </View>
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
    landscapeContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    landscapeInput: {
        width: '100%',
    },
    portraitContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    portraitInput: {
        width: '49%',
    },
});

export default AuthScreen;
