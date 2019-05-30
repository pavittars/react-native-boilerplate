import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, Switch } from "react-native";
import PropTypes from 'prop-types';
import Layout from "../components/common/Layout";
import NextButton from "../components/common/NextButton";
import { moderateScale } from 'react-native-size-matters';
import Image from 'react-native-remote-svg';
import connectbanklogo from '../assets/connectbank.png';

class ConnectBankScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch_1: false,
            switch_2: false,
            switch_3: false
        };
    }

    _switchHandler(e, key) {
        this.setState({ [key]: e });
    }

    _handleClick() {

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
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: moderateScale(16), lineHeight: moderateScale(23) }}>To qualify to send you money,</Text>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: moderateScale(16), lineHeight: moderateScale(23), fontWeight: 'bold' }}>Please confirm:</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.4 }}>
                        <Switch onValueChange={(e) => this._switchHandler(e, 'switch_1')} value={switch_1} />
                        <Text>My account is at least 2 months old</Text>
                        <Switch onValueChange={(e) => this._switchHandler(e, 'switch_2')} value={switch_2} />
                        <Text>I deposit income to this account</Text>
                        <Switch onValueChange={(e) => this._switchHandler(e, 'switch_3')} value={switch_3} />
                        <Text>I make more than 1000 a month</Text>
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