import React from 'react';

import Input from '../UI/Input';

const PlaceInput = (props) => (
    <Input
        value={props.placeName}
        placeholder="Place Name"
        onChangeText={props.onChangeText}
    />
);

export default PlaceInput;
