import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const NextButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props._onPressButton} style={styles.action}>
                <Text style={styles.name}>{props._name}</Text>
                <Image style={styles.icon} source={require('../../assets/baseline-arrow_forward-white-18/2x/baseline_arrow_forward_white_18dp.png')} />
            </TouchableOpacity>
        </View>
    )
};

NextButton.propTypes = {
    _onPressButton: PropTypes.func.isRequired,
    _name: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    action: {
        backgroundColor: '#6059E9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        color: 'white',
        lineHeight: 23,
        fontWeight: 'bold'
    },
    icon: {
        width: 25,
        height: 25
    }
})

export default NextButton;
