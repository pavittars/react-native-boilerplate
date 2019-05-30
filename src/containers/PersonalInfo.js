import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types';
import Layout from "../components/common/Layout";
import NextButton from '../components/common/NextButton';
import InputText from '../components/common/InputText';
import { moderateScale } from 'react-native-size-matters';
import { username } from '../actions/signup';
import { connect } from 'react-redux';
import { validateAlphabet, showAlert } from "../constants/util";
import MESSAGES from "../constants/messages";

class PersonalInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this._handleValidate = this._handleValidate.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.setUserName(this.state.text);
    }

    // validate the fields in the component before submiting (validate username)
    _handleValidate() {
        if (!this.state.text.trim().length) {
            showAlert(MESSAGES.requiredMessage('Full Name'));
            return;
        }
        if (!validateAlphabet(this.state.text)) {
            showAlert(MESSAGES.ValidateMessage('Full Name'));
            return;
        }

        this._handleSubmit();
    }

    // submit the data in the store (save username)
    _handleSubmit() {
        this.props.setUserName(this.state.text);
        this.props.navigation.navigate('ContactInfo');
    }

    render() {
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container} >
                    <View style={{ flex: 0.8, paddingTop: moderateScale(53) }}>
                        <InputText placeholder="John Doe" label="Full Name" value={this.state.text} onMutate={(text) => this.setState({ text })} />
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={''} _onPressButton={this._handleValidate} _name={'NEXT'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout>
        );
    }
}

PersonalInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    setUserName: PropTypes.func.isRequired,
    username: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(40),
        paddingTop: 10
    }
});

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
};

const mapDispatchToProps = (dispatch) => ({ setUserName: (data) => dispatch(username(data)) });

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);