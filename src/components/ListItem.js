/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({ item, _handleClick }) => {
    return (
        <TouchableOpacity style={[styles.container]} onPress={() => _handleClick(item)}>
            <View style={styles.leftChild}>
                <Text style={{ fontSize: 15, fontFamily: 'Cera Basic', lineHeight: 19, color: '#000000' }}>{item.name}</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Cera Basic', lineHeight: 16, color: '#000000', opacity: 0.4, paddingTop: 2 }}>{item.day}</Text>
            </View>
            <View style={styles.rightChild}>
                <Text style={{ fontSize: 15, lineHeight: 19, fontFamily: 'Cera Basic', color: '#53B363', paddingRight: 15 }}>{item.dollar}</Text>
                <Image style={{ opacity: 0.1 }} source={require('../assets/list-arrow-right-vector.png')} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 43
    },
    leftChild: {
        flex: 0.7
    },
    rightChild: {
        flex: 0.3,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    _handleClick: PropTypes.func.isRequired
}

export default ListItem;
