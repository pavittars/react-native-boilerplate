/* eslint-disable react-native/no-color-literals */
/*
 * @file: InputNumberCC.js
 * @description: common component for Phone Number with Country Code for the app.
 * @date: 03.06.2019
 * @author: Pavittar Singh
 */

import React from 'react'
import PropTypes from 'prop-types';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// Input Number with country code text field
const InputNumberCC = ({ label, placeholder, value, onMutate, onCCMutate, CCvalue, CCPlaceholder }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TextInput maxLength={5} style={[styles.textNumberCC, { borderColor: (CCvalue.length ? '#6059E9' : '#DBDAEA') }]} placeholderTextColor={CCvalue.length ? "#6059E9" : "#999999"} placeholder={CCPlaceholder} value={CCvalue} onChangeText={(text) => onCCMutate(text)} />
                <TextInput keyboardType='numeric' maxLength={15} style={styles.textNumber} placeholderTextColor="#999999" placeholder={placeholder} value={value} onChangeText={(text) => onMutate(text)} />
            </View>
        </View>
    )
}

// styles for component
const styles = StyleSheet.create({
    label: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25)
    },
    textNumber: {
        flex: 0.8,
        height: moderateScale(45),
        fontSize: moderateScale(20),
        marginTop: moderateScale(16),
        paddingBottom: moderateScale(8),
        borderBottomWidth: moderateScale(1),
        borderColor: '#DBDAEA'
    },
    textNumberCC: {
        flex: 0.2,
        height: moderateScale(45),
        fontSize: moderateScale(20),
        marginTop: moderateScale(16),
        borderBottomWidth: moderateScale(1),
        paddingBottom: moderateScale(8),
        marginRight: moderateScale(19),
        color: '#6059E9'
    }
});

// compoment Proptypes check
InputNumberCC.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onMutate: PropTypes.func.isRequired,
    onCCMutate: PropTypes.func.isRequired,
    CCvalue: PropTypes.string.isRequired,
    CCPlaceholder: PropTypes.string.isRequired
}

export default InputNumberCC;