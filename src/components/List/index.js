import React from 'react';
import {
    FlatList,
} from 'react-native';

import ListItem from '../ListItem';

const List = (props) => {
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <ListItem
                    key={item.key}
                    text={item.text}
                    image={item.image}
                    onItemPress={() => props.onItemPress(item.key)}
                />
            )}
        />
    );
};

export default List;
