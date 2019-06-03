/*
 * @file: InputSwitch.js
 * @description: Input switch common component for app..
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react'
import PropTypes from 'prop-types';
import { View, Switch, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const InputSwitch = ({ label, value, switchKey, onMutate }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingVertical: moderateScale(10) }}>
            <Switch onValueChange={(e) => onMutate(e, switchKey)} value={value} thumbColor={value ? '#77C6A9' : '#C5C5C5'} trackColor={{ false: '#F1F1F1', true: '#DDF3EB' }} ios_backgroundColor="#F1F1F1" />
            <Text style={{ fontSize: moderateScale(13), lineHeight: moderateScale(16), paddingLeft:10 }}>{label}</Text>
        </View>
    )
}

InputSwitch.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    switchKey: PropTypes.string.isRequired,
    onMutate: PropTypes.func.isRequired,
}

export default InputSwitch;