/*
 * @file: util.js
 * @description: card box with date and month file for the application
 * @date: 03.06.2019
 * @author: Pavittar Singh
 * */

/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const DateCard = (props) => {
    return (
        <View style={{
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#E4E4E4',
            width: 90,
            height: 83,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, textAlign: 'center', color: '#FF6464', textTransform: 'uppercase' }}>
                {props.month}
            </Text>
            <Text style={{ fontFamily: 'CeraBasic-Bold', fontSize: 26, lineHeight: 33, textAlign: 'center', color: '#000000' }}>
                {props.day}
            </Text>
        </View>
    )
}

DateCard.propTypes = {
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired
}


export default DateCard;