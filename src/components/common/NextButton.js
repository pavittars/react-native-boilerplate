import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
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
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    paddX_0: {
        paddingVertical: 15,
        paddingHorizontal: 0,
    },
    action: {
        backgroundColor: '#6059E9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        color: 'white',
        lineHeight: 23,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    icon: {
        width: 25,
        height: 25
    }
})

export default NextButton;
