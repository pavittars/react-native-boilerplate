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
// import { showToast } from "react-native-flash-message";
// custom components
import Layout from "../../components/common/Layout";
import InputNumberCC from "../../components/common/InputNumberCC";
import NextButton from "../../components/common/NextButton";
import { userphonenumber, signup, login } from "../../actions/signup";
import { ValidateCountryCode } from "../../constants/util";
import MESSAGES from "../../constants/messages";
import { showToast } from '../../constants/util';
import { bindActionCreators } from 'redux';

class ContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: '',
            code: '+44',
            buttonLoading: false
        };
        this._handleValidation = this._handleValidation.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleSignUp = this._handleSignUp.bind(this);
        this._handleLogin = this._handleLogin.bind(this);
    }

    _handleValidation() {
        if (!this.state.code.trim().length) {
            showToast({ message: MESSAGES.requiredMessage('Country Code'), type: "danger", duration: 2000 });
            return;
        }
        if (!ValidateCountryCode(this.state.code)) {
            showToast({ message: MESSAGES.ValidateMessage('Country Code'), type: "danger", duration: 2000 });
            return;
        }
        if (!this.state.phonenumber.trim().length) {
            showToast({ message: MESSAGES.requiredMessage('Phone Number!'), type: "danger", duration: 2000 });
            return;
        }
        this._handleSubmit();
    }

    // Handle Sign up process
    _handleSignUp(mobileNumber) {
        let { navigation, username, signupUser } = this.props;
        signupUser({
            phoneNumber: mobileNumber,
            fullName: username
        }, (result) => {
            if (result.status) {
                showToast({ message: result.message, type: "success", duration: 4000 });
                this.setState({ buttonLoading: false }, () => navigation.navigate('VerifyContactInfo'));
            } else {
                this.setState({ buttonLoading: false });
                showToast({ message: result.message, type: "danger", duration: 2000 });
            }
        })
    }

    // Handle Login process
    _handleLogin(mobileNumber) {
        let { navigation, username, signinUser } = this.props;
        signinUser({
            phoneNumber: mobileNumber,
            fullName: username
        }, (result) => {
            if (result.status) {
                showToast({ message: result.message, type: "success", duration: 4000 });
                this.setState({ buttonLoading: false }, () => navigation.navigate('VerifyContactInfo'));
            } else {
                showToast({ message: result.message, type: "danger", duration: 2000 });
                this.setState({ buttonLoading: false });
            }
        })
    }

    // save data into redux store
    _handleSubmit() {
        this.setState({ buttonLoading: true });
        let { SetUserPhoneNumber, userstatus } = this.props;
        let { phonenumber, code } = this.state;
        let mobileNumber = `${code}${phonenumber}`;
        SetUserPhoneNumber(mobileNumber);
        if (userstatus === 'inactive') {
            this._handleSignUp(mobileNumber);
        }
        else {
            this._handleLogin(mobileNumber);
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
                        <NextButton loading={this.state.buttonLoading} btnDisable={this.state.buttonLoading} _onPressButton={this._handleValidation} _name={'NEXT'} />
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
    SetUserPhoneNumber: PropTypes.func.isRequired,
    signupUser: PropTypes.func.isRequired,
    signinUser: PropTypes.func.isRequired,
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
    SetUserPhoneNumber: (data) => dispatch(userphonenumber(data)),
    signupUser: bindActionCreators(signup, dispatch),
    signinUser: bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoScreen);