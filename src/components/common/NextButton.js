import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {  moderateScale } from 'react-native-size-matters';
//import Icon from 'react-native-vector-icons/FontAwesome';

const NextButton = ({
    _name,
    _onPressButton,
    style = 'container'
    // type = ''
}) => {
    return (
        <View style={[styles[style]]}>
            <TouchableOpacity onPress={_onPressButton} style={[styles.action]}>
                <Text style={styles.name}>{_name}</Text>
                <Image style={styles.icon} source={require('../../assets/baseline-arrow_forward-white-18/2x/baseline_arrow_forward_white_18dp.png')} />
            </TouchableOpacity>
        </View>
    )
};

NextButton.propTypes = {
    _onPressButton: PropTypes.func.isRequired,
    _name: PropTypes.string.isRequired,
    style: PropTypes.string,
    // type: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(15),
    },
    paddX_0: {
        paddingVertical: moderateScale(15),
        paddingHorizontal: moderateScale(0),
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
    name: {
        fontSize: moderateScale(18),
        color: 'white',
        fontFamily:'Cera Basic',
        lineHeight: moderateScale(23),
        fontWeight: 'bold'
    },
    icon: {
        width: moderateScale(25),
        height: moderateScale(25)
    }
})

export default NextButton;
