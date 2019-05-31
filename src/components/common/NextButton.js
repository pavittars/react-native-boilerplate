/*
 * @file: app-config.js
 * @description: Input Button common component for app.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

const NextButton = ({
    _name,
    _onPressButton,
    style = 'container',
    type = ''
}) => {
    return (
        <View style={[styles[style]]}>
            {(type === '') && <TouchableOpacity onPress={_onPressButton} style={[styles.action]}>
                <Text style={styles.name}>{_name}</Text>
                <Image style={styles.icon} source={require('../../assets/baseline-arrow_forward-white-18/2x/baseline_arrow_forward_white_18dp.png')} />
            </TouchableOpacity>}
            {(type === 'reverse') && <TouchableOpacity onPress={_onPressButton} style={[styles.action_inverse]} activeOpacity={5}>
                <Text style={styles.name_inverse}>{_name}</Text>
                <Image style={styles.icon} source={require('../../assets/baseline-arrow_forward-black-18/2x/baseline_arrow_forward_black_18dp.png')} />
            </TouchableOpacity>}
        </View>
    )
};

NextButton.propTypes = {
    _onPressButton: PropTypes.func.isRequired,
    _name: PropTypes.string.isRequired,
    style: PropTypes.string,
    type: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(15),
    },
    action: {
        backgroundColor: '#6059E9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(5)
    },
    action_inverse: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#6059E9',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(5)
    },
    name: {
        fontSize: moderateScale(18),
        color: 'white',
        fontFamily: 'Cera Basic',
        lineHeight: moderateScale(23),
        fontWeight: 'bold'
    },
    name_inverse: {
        fontSize: moderateScale(18),
        color: '#6059E9',
        fontFamily: 'Cera Basic',
        lineHeight: moderateScale(23),
        fontWeight: 'bold'
    },
    icon: {
        width: moderateScale(25),
        height: moderateScale(25)
    }
})

export default NextButton;
