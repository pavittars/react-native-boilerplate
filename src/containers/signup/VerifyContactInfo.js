/*
 * @file: VerifyContactInfo.js
 * @description: Verify Contact Info bank file for the application
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import idx from 'idx';

// custom component import
import { showAlert } from "../../constants/util";
import Layout from "../../components/common/Layout";
import InputText from "../../components/common/InputText";
import NextButton from "../../components/common/NextButton";
// constant file import
import MESSAGES from "../../constants/messages";
import RestClient from '../../config/RestClient';


class VerifyContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this._handleValidation = this._handleValidation.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidMount() {
        let {navigation} = this.props;
        const Message = idx(navigation, _ => _.state.params.message); 
        showAlert(Message);
    }


    _handleValidation() {
        if (!this.state.text.trim().length) {
            showAlert(MESSAGES.requiredMessage('Code!'));
            return;
        }
        this._handleSubmit();
    }


    _handleSubmit() {
        let { navigation, userstatus, userphonenumber } = this.props;
        let { text } = this.state;
        RestClient.post('confirmOtp', {
            phoneNumber: userphonenumber,
            otp: text,
            status: userstatus
          })
            .then(result => {
                if (result.status === 200) {
                    navigation.navigate('ConnectBank');
                } else {
                    showAlert('Something went wrong !');
                }
            })
            .catch(() => {
                showAlert('Something went wrong !');
            });
    }

    render() {
        return (
            <Layout>
                <View style={styles.container}>
                    <View style={{ flex: 0.4, paddingTop: 53 }}>
                        <InputText placeholder="123456" label="Code" maxlength={15} value={this.state.text} onMutate={(text) => this.setState({ text })} />
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                    <View style={{ flex: 0.1 }}>
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
    userphonenumber: PropTypes.string.isRequired
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
        userphonenumber: state.userphonenumber
    }
};

export default connect(mapStateToProps, null)(VerifyContactInfoScreen);