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
        
        this.state = {
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
                        <Input placeholder="Your Email" style={styles.input} />
                        
                        <View style={isShortHeight ? portraitContainer : landscapeContainer}>
                            <View style={isShortHeight ? portraitInput : landscapeInput}>
                                <Input placeholder="Password" style={styles.input} />
                            </View>
                            
                            <View style={isShortHeight ? portraitInput : landscapeInput}>
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
