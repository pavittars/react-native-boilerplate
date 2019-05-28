import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
const Layout = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.childContainer]}>{props.children}</View>
        </View>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6059e9',
        flex: 1
    },
    childContainer: {
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        overflow: 'hidden',
        backgroundColor:'#fff'
    }
});

export default Layout;