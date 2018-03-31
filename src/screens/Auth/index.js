import React from 'react';
import {
    View,
    Keyboard,
    StyleSheet,
    Dimensions,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';
import {
    connect,
} from 'react-redux';

import Input from '../../components/UI/Input';
import Heading from '../../components/UI/Heading';
import MainText from '../../components/UI/MainText';
import Button from '../../components/UI/Button';

import startTabs from '../MainTabs/startMainTabs';
import validate from '../../utility/validation';

import {
    tryAuth,
} from '../../store/actions';

import backgroundImage from '../../../assets/milky-way.jpg';

class AuthScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoginMode: true,
            controls: {
                email: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isEmail: true,
                    },
                    touched: false,
                },
                password: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minLength: 6,
                    },
                    touched: false,
                },
                confirmPassword: {
                    value: '',
                    valid: false,
                    validationRules: {
                        equalTo: 'password',
                    },
                    touched: false,
                },
            },
            isShortHeight: this.isShortHeight(),
        };
        
        Dimensions.addEventListener('change', this.getOrientation);
    }
    
    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.getOrientation);
    }
    
    switchAuthModeHandler = () => {
        this.setState(prevState => ({
            isLoginMode: !prevState.isLoginMode,
        }));
    }
    
    getOrientation = () => {
        this.setState({ isShortHeight: this.isShortHeight() });
    }
    
    isShortHeight = () => {
        return Dimensions.get('window').height < 550;
    }
    
    logInUser = () => {
        const {
            email,
            password,
        } = this.state.controls;
        const authData = {
            email: email.value,
            password: password.value,
        }
        
        this.props.onLogin(authData);
        
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
                    touched: true,
                    valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                },
            },
        }));
    }

    render() {
        const {
            controls,
            isLoginMode,
            isShortHeight,
        } = this.state;
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
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}
                >
                    
                    {headingText}
                    
                    <Button
                        color="#29AAF4"
                        onPress={this.switchAuthModeHandler}
                    >
                        Switch to {isLoginMode ? 'Sign Up' : 'Login'}
                    </Button>
                    
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inputContainer}>
                            <Input
                                autoCorrect={false}
                                style={styles.input}
                                autoCapitalize="none"
                                placeholder="Your Email"
                                valid={controls.email.valid}
                                value={controls.email.value}
                                keyboardType="email-address"
                                touched={controls.email.touched}
                                onChangeText={(value) => this.updateInputState('email', value)}
                            />
                            
                            <View style={isShortHeight && !isLoginMode ? portraitContainer : landscapeContainer}>
                                <View style={isShortHeight && !isLoginMode ? portraitInput : landscapeInput}>
                                    <Input
                                        secureTextEntry
                                        style={styles.input}
                                        placeholder="Password"
                                        valid={controls.password.valid}
                                        value={controls.password.value}
                                        touched={controls.password.touched}
                                        onChangeText={(value) => this.updateInputState('password', value)}
                                    />
                                </View>
                                
                                {!isLoginMode && (
                                    <View style={isShortHeight ? portraitInput : landscapeInput}>
                                        <Input
                                            secureTextEntry
                                            style={styles.input}
                                            placeholder="Confirm Password"
                                            valid={controls.confirmPassword.valid}
                                            value={controls.confirmPassword.value}
                                            touched={controls.confirmPassword.touched}
                                            onChangeText={(value) => this.updateInputState('confirmPassword', value)}
                                        />
                                    </View>
                                )}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <Button
                        color="#29AAF4"
                        onPress={this.logInUser}
                        disabled={
                            !controls.email.valid
                            || !controls.password.valid
                            || (!isLoginMode && !controls. confirmPassword.valid)
                        }
                    >
                        Submit
                    </Button>
                </KeyboardAvoidingView>
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

const mapDispatchToProps = (dispatch) => ({
    onLogin: (authData) => dispatch(tryAuth(authData)),
});

export default connect(null, mapDispatchToProps)(AuthScreen);
