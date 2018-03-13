import React from 'react';

import ListItem from '../ListItem';

const List = (props) => {
    return props.data.map((item, index) => {
        return (
            <ListItem
                key={index}
                text={item}
            />
        );
    });
};

export default List;
