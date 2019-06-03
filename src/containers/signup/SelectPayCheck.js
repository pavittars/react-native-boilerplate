/*
 * @file: VerifyContactInfo.js
 * @description: Select paycheck screen for the application.
 * @date: 03.06.2019
 * @author: Pavittar Singh
 * */


import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import PropTypes from 'prop-types';
// custom components
import Layout from "../../components/common/Layout";
import Listing from "../../components/Listing";

const list = [{
    name: 'Some Great Paycheck',
    day: 'On every wednesday',
    dollar: '£1,400.00'
}, {
    name: 'Other Paycheck',
    day: 'On every wednesday',
    dollar: '£400.00'
}, {
    name: 'Another one from CQ',
    day: 'On every wednesday',
    dollar: '£1,000.00'
}];

export default class SelectPayCheckScreen extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        let { navigation } = this.props;
        navigation.navigate('PayCheckDetail');
    }

    render() {
        return (
            <Layout>
                <View style={styles.container}>
                    <Listing list={list} _handleClick={this._handleClick} />
                </View>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(32),
        paddingTop: moderateScale(30)
    }
});

SelectPayCheckScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}