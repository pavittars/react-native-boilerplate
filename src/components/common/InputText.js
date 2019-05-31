/*
 * @file: app-config.js
 * @description: Input text common component for app..
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react'
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import {  moderateScale } from 'react-native-size-matters';

const InputText = (props) => {
    return (
        <View>
            <Text style={{ fontSize: moderateScale(20), lineHeight: moderateScale(25)}}>{props.label}</Text>
            <TextInput style={{ height: moderateScale(50), fontSize: moderateScale(20), marginTop: moderateScale(10), paddingBottom: moderateScale(8), borderBottomWidth: moderateScale(1) }} placeholderTextColor="#999999" placeholder={props.placeholder} value={props.value} maxLength={props.maxlength} onChangeText={(text) => props.onMutate(text)} />
        </View>
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onMutate: PropTypes.func.isRequired,
    maxlength: PropTypes.number.isRequired
}

export default InputText;