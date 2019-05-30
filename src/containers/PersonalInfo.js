import React, { Component } from 'react';
import { View, StyleSheet,KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types';
import Layout from "../components/common/Layout";
import NextButton from '../components/common/NextButton';
import InputText from '../components/common/InputText';
import {  moderateScale } from 'react-native-size-matters';

class PersonalInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
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
                        <NextButton style={''} _onPressButton={this._handleClick} _name={'NEXT'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout>
        );
    }
}

PersonalInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(40),
        paddingTop:10
    }
});

export default PersonalInfoScreen;