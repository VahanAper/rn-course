import React from 'react';
import {
    ScrollView,
} from 'react-native';

import ListItem from '../ListItem';

const List = (props) => {
    const items = props.data.map((item, index) => {
        return (
            <ListItem
                key={index}
                text={item}
                onItemPress={() => props.onItemPress(index)}
            />
        );
    });
    
    return (
        <ScrollView>
            {items}
        </ScrollView>
    );
};

export default List;
