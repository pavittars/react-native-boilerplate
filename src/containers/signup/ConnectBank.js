/*
 * @file: ConnectBank.js
 * @description: Connect bank file for the application
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';
import Image from 'react-native-remote-svg';
// components
import Layout from "../../components/common/Layout";
import NextButton from "../../components/common/NextButton";
import InputSwitch from "../../components/common/InputSwitch";

// assets
import connectbanklogo from "../../assets/connectbank.png";

class ConnectBankScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch_1: false,
            switch_2: false,
            switch_3: false
        };
        this._switchHandler = this._switchHandler.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }
    // click handler for switch input component
    _switchHandler(e, key) {
        this.setState({ [key]: e });
    }

    _handleClick() {
        this.props.navigation.navigate('SelectBankScreen');
    }

    render() {
        let { switch_1, switch_2, switch_3 } = this.state;
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container} >
                    <View style={{ flex: 0.4, paddingTop: moderateScale(53), justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={
                                connectbanklogo
                            }
                            style={{ width: moderateScale(195), height: moderateScale(173) }}
                        />
                        <View style={{ paddingTop: 43, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: moderateScale(16), lineHeight: moderateScale(23) }}>To qualify for us to send you money,</Text>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: moderateScale(16), lineHeight: moderateScale(23), fontWeight: 'bold' }}>Please confirm:</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.4, paddingVertical: 50 }}>
                        <InputSwitch label="My account is at least 2 months old" onMutate={this._switchHandler} switchKey="switch_1" value={switch_1} />
                        <InputSwitch label="I deposit income to this account" onMutate={this._switchHandler} switchKey="switch_2" value={switch_2} />
                        <InputSwitch label="I make more than 1000 a month" onMutate={this._switchHandler} switchKey="switch_3" value={switch_3} />
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={''} _onPressButton={this._handleClick} _name={'NEXT'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout>
        );
    }
}

ConnectBankScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(40),
        paddingTop: 10
    }
});

export default ConnectBankScreen;