import React from 'react';

import ListItem from '../ListItem';

const List = (props) => {
    return props.data.map((item, index) => {
        return (
            <ListItem
                key={index}
                text={item}
                onItemPress={() => alert(index)}
            />
        );
    });
};

export default List;
