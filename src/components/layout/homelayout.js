/*
 * @file: Layout.js
 * @description: Layout wrapper for curved design for the app.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import PropTypes from 'prop-types';

const HomeLayout = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#6059e9" />
            <View style={[styles.childContainer]}>
                {props.children}
            </View>
        </View>
    );
};

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6059e9',
        flex: 1,
        // zIndex: -1
    },
    childContainer: {
        flex: 1,
        position: 'absolute',
        top: 180,
        bottom: 0,
        left: 0,
        right: 0,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#fff',
        zIndex: -100
    }
});

export default HomeLayout;