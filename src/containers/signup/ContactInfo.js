/*
 * @file: ContactInfo.js
 * @description: Contact Info file for the application
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moderateScale } from "react-native-size-matters";

// custom components
import Layout from "../../components/common/Layout";
import InputNumberCC from "../../components/common/InputNumberCC";
import NextButton from "../../components/common/NextButton";
import { userphonenumber } from "../../actions/signup";
// eslint-disable-next-line no-unused-vars
import { showAlert, ValidateCountryCode } from "../../constants/util";
import MESSAGES from "../../constants/messages";
import RestClient from "../../config/RestClient";

class ContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: '',
            code: '+44'
        };
        this._handleValidation = this._handleValidation.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleValidation() {
        if (!this.state.code.trim().length) {
            showAlert(MESSAGES.requiredMessage('Country Code'));
            return;
        }
        if (!ValidateCountryCode(this.state.code)) {
            showAlert(MESSAGES.ValidateMessage('Country Code'));
            return;
        }
        if (!this.state.phonenumber.trim().length) {
            showAlert(MESSAGES.requiredMessage('Phone Number!'));
            return;
        }
        // if (!validatePhoneNumber(this.state.text)) {
        //     showAlert(MESSAGES.ValidateMessage('Phone Number!'));
        //     return;
        // }
        this._handleSubmit();
    }

    // save data into redux store
    _handleSubmit() {
        let { navigation, username, SetUserPhoneNumber, userstatus } = this.props;
        let { phonenumber, code } = this.state;
        let mobileNumber = `${code}${phonenumber}`;
        SetUserPhoneNumber(mobileNumber);
        if (userstatus === 'inactive') {
            RestClient.post('smsAuth', {
                phoneNumber: mobileNumber,
                fullName: username
            })
                .then(result => {
                    if (result.status === 200) {
                        navigation.navigate('VerifyContactInfo', {
                            message: result.data.message
                        });
                    } else {
                        showAlert(result.data.message);
                    }
                })
                .catch(() => {
                    showAlert(MESSAGES.genericError);
                });
        }
        else {
            RestClient.post('login', {
                phoneNumber: mobileNumber
            })
                .then(result => {
                    if (result.status === 200) {
                        navigation.navigate('VerifyContactInfo', {
                            message: result.data.message
                        });
                    } else {
                        showAlert(result.data.message);
                    }
                })
                .catch(() => {
                    showAlert(MESSAGES.genericError);
                });
        }
    }

    render() {
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={{ flex: 0.8, paddingTop: moderateScale(53) }}>
                        <InputNumberCC placeholder="55533535555" label="Phone number" value={this.state.phonenumber} onMutate={(phonenumber) => this.setState({ phonenumber })} CCvalue={this.state.code} CCPlaceholder="+44" onCCMutate={(code) => this.setState({ code })} />
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={'PaddX'} _onPressButton={this._handleValidation} _name={'NEXT'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout>
        );
    }
}

ContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    userstatus: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userphonenumber: PropTypes.string.isRequired,
    SetUserPhoneNumber: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    }
});

const mapStateToProps = (state) => {
    return {
        userstatus: state.userstatus,
        username: state.username,
        userphonenumber: state.userphonenumber
    }
};

const mapDispatchToProps = (dispatch) => ({
    SetUserPhoneNumber: (data) => dispatch(userphonenumber(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoScreen);