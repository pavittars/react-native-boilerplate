/*
 * @file: VerifyContactInfo.js
 * @description: Verify Contact Info bank file for the application
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom component import
import { showToast } from "../../constants/util";
import Layout from "../../components/common/Layout";
import InputText from "../../components/common/InputText";
import NextButton from "../../components/common/NextButton";
// constant file import
import MESSAGES from "../../constants/messages";
import { confirmVerificationCode, signup, login } from '../../actions/signup';
import CONSTANT from '../../constants/Constant';

class VerifyContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            buttonLoading: false
        };
        this._handleValidation = this._handleValidation.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._onPressButton = this._onPressButton.bind(this);
    }

    // Validate phone number code
    _handleValidation() {
        if (!this.state.text.trim().length) {
            showToast({ message: MESSAGES.requiredMessage('Code!') });
            return;
        }
        this._handleSubmit();
    }

    // handle api call for phone number code
    _handleSubmit() {
        this.setState({ buttonLoading: true });
        let { navigation, userstatus, userphonenumber, confirmVerificationCode } = this.props;
        let { text } = this.state;
        confirmVerificationCode({
            phoneNumber: userphonenumber,
            otp: text,
            status: userstatus
        }, (result) => {
            if (result.status) {
                this.setState({ buttonLoading: false }, () => {
                    let routeName = CONSTANT.onboardingStatus.find(x => x.id === result.onboardingStatus);
                    navigation.navigate(routeName ? routeName.route : 'ConnectBank');
                });
            } else {
                this.setState({ buttonLoading: false });
                showToast({ message: result.message });
            }
        });
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
                showToast({ message: result.data.message, type: "danger", duration: 2000 });
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

    // on button click
    _onPressButton() {
        let { userstatus, userphonenumber } = this.props;
        let mobileNumber = userphonenumber;
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
                <View style={styles.container}>
                    <View style={{ flex: 0.8, paddingTop: 53 }}>
                        <InputText placeholder="1234" label="Code" maxlength={15} value={this.state.text} onMutate={(text) => this.setState({ text })} />
                        <TouchableOpacity onPress={this._onPressButton} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ fontSize: 15, lineHeight: 19, fontFamily: 'Cera Basic', color: '#6059E9' }}>Didn’t get a code? Send again</Text>
                            <Image style={{ marginLeft: 5, width: 14, height: 14 }} source={require('../../assets/right_arrow_slate_blue.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton loading={this.state.buttonLoading} btnDisable={this.state.buttonLoading} style={'PaddX'} _onPressButton={this._handleValidation} _name={'NEXT'} />
                    </View>
                </View>
            </Layout>
        );
    }
}

VerifyContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    userstatus: PropTypes.string.isRequired,
    userphonenumber: PropTypes.string.isRequired,
    confirmVerificationCode: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    signupUser: PropTypes.func.isRequired,
    signinUser: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    }
});

const mapStateToProps = (state) => ({
    userstatus: state.userstatus,
    username: state.username,
    userphonenumber: state.userphonenumber
});

const mapDispatchToProps = (dispatch) => ({
    confirmVerificationCode: bindActionCreators(confirmVerificationCode, dispatch),
    signupUser: bindActionCreators(signup, dispatch),
    signinUser: bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyContactInfoScreen);