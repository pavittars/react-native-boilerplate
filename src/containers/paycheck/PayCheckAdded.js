/*
 * @file: VerifyContactInfo.js
 * @description: Paycheck detail screen for the application
 * @date: 03.06.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

// Custom components
import Layout from '../../components/common/Layout';
import NextButton from '../../components/common/NextButton';

export default class PayCheckAddedScreen extends Component {


    render() {
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={{ flex: 0.8 }}>
                        <View style={{ flex: 0.5, alignItems: 'center', paddingTop: moderateScale(63)}}>
                            <Image style={{ width: moderateScale(293), height: moderateScale(190.79) }} source={require('../../assets/paycheck_added.png')} />
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'center', paddingHorizontal: moderateScale(12) }}>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 28.9, color: '#000000' }}>
                                All set! If you qualify for cash
                        </Text>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 28.9, color: '#000000' }}>
                                advances, we’ll set up your payment
                        </Text>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 28.9, color: '#000000' }}>
                                on the days you get paid.
                        </Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={''} _onPressButton={()=>{}} _name={'CONFIRM'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(40)
    }
});

PayCheckAddedScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}
