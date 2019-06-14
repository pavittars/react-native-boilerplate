/*
 * @file: Layout.js
 * @description: Layout wrapper for curved design for the app.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

const HomeLayout = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#6059e9" />
            <View style={{
                backgroundColor: '#6059e9',
                paddingVertical: moderateScale(25),
                flex: moderateScale(0.2),
                justifyContent: 'center',
                paddingHorizontal: moderateScale(40),
                zIndex: moderateScale(-100)
            }}>
                <Text style={{ fontSize: moderateScale(18), lineHeight: moderateScale(23), color: '#ffffff', fontFamily: 'CeraBasic-Bold' }}>
                    {props.text}
                </Text>
            </View>
            <View style={[styles.childContainer]}>
                {props.children}
            </View>
        </View>
    );
};

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6059e9',
        flex: 1,
        zIndex: moderateScale(-100)
    },
    childContainer: {
        flex: moderateScale(1),
        borderTopRightRadius: moderateScale(40),
        borderTopLeftRadius: moderateScale(40),
        backgroundColor: '#fff',
        zIndex: moderateScale(-100)
    }
});

export default HomeLayout;