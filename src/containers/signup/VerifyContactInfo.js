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
import idx from 'idx';
import { bindActionCreators } from 'redux';

// custom component import
import { showAlert } from "../../constants/util";
import Layout from "../../components/common/Layout";
import InputText from "../../components/common/InputText";
import NextButton from "../../components/common/NextButton";
// constant file import
import MESSAGES from "../../constants/messages";
// import RestClient from '../../config/RestClient';

import { confirmVerificationCode } from '../../actions/signup';
import RestClient from '../../config/RestClient';


class VerifyContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this._handleValidation = this._handleValidation.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._onPressButton = this._onPressButton.bind(this);
    }

    componentDidMount() {
        let { navigation } = this.props;
        const Message = idx(navigation, _ => _.state.params.message);
        showAlert(Message);
    }

    // Validate phone number code
    _handleValidation() {
        if (!this.state.text.trim().length) {
            showAlert(MESSAGES.requiredMessage('Code!'));
            return;
        }
        this._handleSubmit();
    }

    // handle api call for phone number code
    _handleSubmit() {
        let { navigation, userstatus, userphonenumber, confirmVerificationCode } = this.props;
        let { text } = this.state;
        confirmVerificationCode({
            phoneNumber: userphonenumber,
            otp: text,
            status: userstatus
        }, (result) => {
            if (result.status) {
                navigation.navigate('ConnectBank');
            } else {
                showAlert(result.message);
            }
        });
    }

    _onPressButton() {
        let { username, userstatus, userphonenumber } = this.props;
        let mobileNumber = userphonenumber;
        if (userstatus === 'inactive') {
            RestClient.post('smsAuth', {
                phoneNumber: mobileNumber,
                fullName: username
            })
                .then(result => {
                    if (result.status === 200) {
                        showAlert(result.data.message);
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
                        showAlert(result.data.message);
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
                <View style={styles.container}>
                    <View style={{ flex: 0.2, paddingTop: 53 }}>
                        <InputText placeholder="123456" label="Code" maxlength={15} value={this.state.text} onMutate={(text) => this.setState({ text })} />
                    </View>
                    <View style={{ flex: 0.6 }}>
                        <TouchableOpacity onPress={this._onPressButton} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, lineHeight: 19, fontFamily: 'Cera Basic', color: '#6059E9' }}>Didn’t get a code? Send again</Text>
                            <Image style={{marginLeft:5, width:14, height:14}} source={require('../../assets/right_arrow_slate_blue.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={'PaddX'} _onPressButton={this._handleValidation} _name={'NEXT'} />
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
    username: PropTypes.string.isRequired
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
    confirmVerificationCode: bindActionCreators(confirmVerificationCode, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyContactInfoScreen);