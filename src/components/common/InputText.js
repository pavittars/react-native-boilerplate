/*
 * @file: InputText.js
 * @description: Input text common component for app..
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react'
import PropTypes from 'prop-types';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const InputText = ({ labelStyle, inputStyle, label, placeholder, value, maxlength, onMutate, disable = true }) => {
    let labelStyling = labelStyle || styles.labelStyle;
    let inputStyling = inputStyle || styles.inputStyle;
    return (
        <View>
            <Text style={labelStyling}>{label}</Text>
            <TextInput style={inputStyling} placeholderTextColor="#999999" placeholder={placeholder} value={value} maxLength={maxlength} onChangeText={(text) => onMutate(text)} editable={disable} />
        </View>
    )
}

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25)
    },
    inputStyle: {
        height: moderateScale(50),
        fontSize: moderateScale(20),
        marginTop: moderateScale(10),
        paddingBottom: moderateScale(8),
        borderBottomWidth: moderateScale(1),
        borderColor: '#DBDAEA'
    }
});

InputText.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onMutate: PropTypes.func.isRequired,
    maxlength: PropTypes.number,
    labelStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    disable: PropTypes.bool
}

export default InputText;