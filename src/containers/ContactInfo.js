import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types';
import Layout from "../components/common/Layout";
import InputNumber from "../components/common/InputNumber";
import NextButton from "../components/common/NextButton";
import { moderateScale } from 'react-native-size-matters';
import { userphonenumber } from '../actions/signup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validatePhoneNumber, showAlert } from "../constants/util";
import MESSAGES from "../constants/messages";
import RestClient from '../utilities/RestClient';

class ContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this._handleValidation = this._handleValidation.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleValidation() {
        if (!this.state.text.trim().length) {
            showAlert(MESSAGES.requiredMessage('Phone Number!'));
            return;
        }
        if (!validatePhoneNumber(this.state.text)) {
            showAlert(MESSAGES.ValidateMessage('Phone Number!'));
            return;
        }
        this._handleSubmit();
    }

    // save data into redux store
    _handleSubmit() {
        let { navigation, username, SetUserPhoneNumber, userstatus } = this.props;
        let { text } = this.state;
        SetUserPhoneNumber(text);
        if (userstatus === 'inactive') {
            RestClient.post('smsAuth', {
                phoneNumber: text,
                fullName: username
            })
                .then(result => {
                    if (result.status === 200) {
                        navigation.navigate('VerifyContactInfo', {
                            message: result.data.message
                        });
                    } else {
                        showAlert('Something went wrong !');
                    }
                })
                .catch(() => {
                    showAlert('Something went wrong !');
                });
        }
        else {
            RestClient.post('login', {
                phoneNumber: text
            })
                .then(result => {
                    if (result.status === 200) {
                        navigation.navigate('VerifyContactInfo', {
                            message: result.data.message
                        });
                    } else {
                        showAlert('Something went wrong !');
                    }
                })
                .catch(() => {
                    showAlert('Something went wrong !');
                });
        }
    }

    render() {
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={{ flex: moderateScale(0.4), paddingTop: moderateScale(53) }}>
                        <InputNumber placeholder="55533535555" label="Phone number" value={this.state.text} onMutate={(text) => this.setState({ text })} />
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                    <View style={{ flex: 0.1 }}>
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