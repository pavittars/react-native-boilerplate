/*
 * @file: VerifyContactInfo.js
 * @description: Paycheck detail screen for the application
 * @date: 03.06.2019
 * @author: Pavittar Singh
 * */


/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
// custom components
import Layout from '../../components/common/Layout';
import NextButton from '../../components/common/NextButton';
import DateCard from '../../components/DateCard';
export default class PayCheckDetailScreen extends Component {

    constructor(props) {
        super(props);
        this._onEditClick = this._onEditClick.bind(this)
        this._handleValidate = this._handleValidate.bind(this)
    }

    _onEditClick() {

    }

    _handleValidate() {
        this.props.navigation.navigate('EditPayCheck');
    }

    render() {
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={{ flex: 0.8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 64 }}>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#000000' }}>Other Paycheck</Text>
                            <TouchableOpacity onPress={this._onEditClick} style={{
                                backgroundColor: '#F0EFFF',
                                borderRadius: 6.02564,
                                padding: 5,
                                justifyContent:'center', alignItems:'center'
                            }}>
                                <Text style={{ fontSize: 12.0513, fontFamily: 'CeraBasic-Bold', color: '#6059E9', }}>EDIT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 36 }}>
                            <Text style={styles.text}>Estimated amount</Text>
                            <Text style={{
                                fontFamily: 'Cera Basic',
                                fontSize: 20,
                                lineHeight: 25, color: '#53B263'
                            }}>£1,400.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 36 }}>
                            <Text style={styles.text}>On the <Text style={styles.textBold}>15th</Text> of every <Text style={styles.textBold}>month</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 36 }}>
                            <Text style={styles.text}>Upcoming paychecks</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 19, justifyContent: 'space-between' }}>
                            <DateCard month="may" day="20" />
                            <DateCard month="may" day="20" />
                            <DateCard month="may" day="20" />
                        </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={''} _onPressButton={this._handleValidate} _name={'CONFIRM'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    },
    text: {
        fontSize: 15,
        lineHeight: 19,
        fontFamily: 'Cera Basic'
    },
    textBold: {
        fontFamily: 'CeraBasic-Bold'
    },
    price: {

    }
});

PayCheckDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}