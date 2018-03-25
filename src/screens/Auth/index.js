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

import backgroundImage from '../../../assets/milky-way.jpg';

class AuthScreen extends React.Component {
    constructor(props) {
        super(props);
        
        const portraitStyles = {
            passwordWidth: '100%',
            passwordAlign: 'flex-start',
            passwordDirection: 'column',
        };
        const landscapeStyles = {
            passwordWidth: '49%',
            passwordAlign: 'space-between',
            passwordDirection: 'row',
        }
        
        this.state = {
            isShortHeight: this.isShortHeight(),
            responsiveStyles: portraitStyles,
        };
        
        Dimensions.addEventListener('change', (dims) => {
            const isShortHeight = this.isShortHeight();
            
            this.setState({
                isShortHeight,
                responsiveStyles: isShortHeight ? landscapeStyles : portraitStyles,
            });
        });
    }
    
    isShortHeight = () => {
        return Dimensions.get('window').height < 550;
    }
    
    logInUser = () => {
        startTabs();
    }

    render() {
        const { responsiveStyles, isShortHeight } = this.state;
        
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
                        <Input placeholder="Your Email" style={styles.input} />
                        
                        <View
                            style={{
                                flexDirection: responsiveStyles.passwordDirection,
                                justifyContent: responsiveStyles.passwordAlign,
                            }}
                        >
                            <View
                                style={{
                                    width: responsiveStyles.passwordWidth,
                                }}
                            >
                                <Input placeholder="Password" style={styles.input} />
                            </View>
                            <View
                                style={{
                                    width: responsiveStyles.passwordWidth,
                                }}
                            >
                                <Input placeholder="Confirm Password" style={styles.input} />
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
});

export default AuthScreen;
