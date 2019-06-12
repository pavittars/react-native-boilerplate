/* eslint-disable react-native/no-color-literals */
/*
 * @file: NextButton.js
 * @description: Input Button common component for app.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

const NextButton = ({
    _name,
    _onPressButton,
    style = 'container',
    type = '',
    loading = false,
    btnDisable = false
}) => {
    return (
        <View style={[styles[style]]}>
            {(type === '') && <TouchableOpacity onPress={_onPressButton} style={[styles.action, { opacity: btnDisable ? 0.7 : 1 }]} disabled={btnDisable}>
                <Text style={styles.name}>{_name}</Text>
                {!loading && <Image source={require('../../assets/right_arrow_white.png')} />}
                {loading && <ActivityIndicator color="#fff" />}
            </TouchableOpacity>}
            {(type === 'reverse') && <TouchableOpacity onPress={_onPressButton} style={[styles.action_inverse, { opacity: btnDisable ? 0.7 : 1 }]} activeOpacity={5} disabled={btnDisable}>
                <Text style={styles.name_inverse}>{_name}</Text>
                {!loading && <Image source={require('../../assets/right_arrow_slate_blue.png')} />}
                {loading && <ActivityIndicator color="#6059E9" />}
            </TouchableOpacity>}
        </View>
    )
};

NextButton.propTypes = {
    _onPressButton: PropTypes.func.isRequired,
    _name: PropTypes.string.isRequired,
    style: PropTypes.string,
    type: PropTypes.string,
    loading: PropTypes.bool,
    btnDisable: PropTypes.bool
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
