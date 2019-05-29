import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
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
                <View style={styles.container}>
                    <View style={{ flex: moderateScale(0.4), paddingTop: moderateScale(53) }}>
                        <InputText placeholder="John Doe" label="Full Name" value={this.state.text} onMutate={(text) => this.setState({ text })} />
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                    <View style={{ flex: 0.1 }}>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={'PaddX'} _onPressButton={this._handleClick} _name={'Next'} />
                    </View>
                </View>
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
        paddingHorizontal: 40
    }
});

export default PersonalInfoScreen;