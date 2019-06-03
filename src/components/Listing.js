import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const Listing = ({ list, _handleClick }) => {
    return (
        <FlatList data={list} renderItem={({ item }) => <ListItem item={item} _handleClick={_handleClick} />} />
    );
}

Listing.propTypes = {
    list: PropTypes.array.isRequired,
    _handleClick: PropTypes.func.isRequired
};

export default Listing;