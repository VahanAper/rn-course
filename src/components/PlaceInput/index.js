import React from 'react';

import Input from '../UI/Input';

class PlaceInput extends React.Component {
    state = {
        placeName: '',
    }
    
    placeNameChangeHandler = (placeName) => {
        this.setState({ placeName });
    }
    
    render() {
        return (
            <Input
                value={this.state.placeName}
                placeholder="An awesome place"
                onChangeText={this.placeNameChangeHandler}
            />
        );
    }
}

export default PlaceInput;
