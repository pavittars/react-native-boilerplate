/*
 * @file: InputNumber.js
 * @description: input number common component for app.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react'
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import {  moderateScale } from 'react-native-size-matters';
const InputNumber = (props) => {
    return (
        <View>
            <Text style={{fontSize: moderateScale(20), lineHeight: moderateScale(25), borderColor: '#DBDAEA'}}>{props.label}</Text>
            <TextInput keyboardType='numeric' maxLength={15} style={{height:moderateScale(45), fontSize:moderateScale(20), marginTop:moderateScale(16), paddingBottom:moderateScale(8), borderBottomWidth:moderateScale(1), borderColor: '#DBDAEA'}} placeholderTextColor="#999999" placeholder={props.placeholder} value={props.value} onChangeText={(text)=>props.onMutate(text)} />
        </View>
    )
}

InputNumber.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onMutate: PropTypes.func.isRequired,
}

export default InputNumber;