import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';

// Register Screens
Navigation.registerComponent('rncourse.AuthScreen', () => AuthScreen);

// Start the App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'rncourse.AuthScreen',
        title: 'Login',
    },
});


// import React from 'react';
// import {
//     View,
//     Text,
//     Button,
//     TextInput,
//     StyleSheet,
// } from 'react-native';
// import {
//     connect,
// } from 'react-redux';
// 
// import List from './src/components/List';
// import PlaceDetail from './src/components/PlaceDetail';
// 
// import {
//     addPlace,
//     deletePlace,
//     selectPlace,
//     deselectPlace,
// } from './src/store/actions';
// 
// class App extends React.Component {
//     state = {
//         placeName: '',
//     }
// 
//     placeNameChangeHandler = (placeName) => {
//         this.setState({ placeName });
//     }
// 
//     placeSubmitHandler = () => {
//         this.props.onAddPlace(this.state.placeName);
//     }
// 
//     onItemSelect = (key) => {
//         this.props.onSelectPlace(key);
//     }
// 
//     deletePlace = () => {
//         this.props.onDeletePlace();
//     }
// 
//     closeModal = () => {
//         this.props.onDeselectPlace();
//     }
// 
//     render() {
//         return (
//             <View style={styles.container}>
// 
//                 <PlaceDetail
//                     onClose={this.closeModal}
//                     onDelete={this.deletePlace}
//                     selected={this.props.selectedPlace}
//                 />
// 
//                 <View style={styles.inputContainer}>
//                     <TextInput
//                         style={styles.placeInput}
//                         value={this.state.placeName}
//                         placeholder="An awesome place"
//                         onChangeText={this.placeNameChangeHandler}
//                     />
//                     <Button
//                         title="ADD"
//                         style={styles.placeButton}
//                         onPress={this.placeSubmitHandler}
//                     />
//                 </View>
// 
//                 <View style={styles.listContainer}>
//                     <List
//                         data={this.props.places}
//                         onItemPress={this.onItemSelect}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }
// 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         justifyContent: 'flex-start',
//     },
//     placeInput: {
//         width: '70%',
//     },
//     placeButton: {
//         width: '30%',
//     },
//     inputContainer: {
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     listContainer: {
//         width: '100%',
//     },
// });
// 
// const mapStateToProps = (state) => ({
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace,
// });
// 
// const mapDispatchToProps = (dispatch) => ({
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace()),
// });
// 
// export default connect(mapStateToProps, mapDispatchToProps)(App);
