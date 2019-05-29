import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import Layout from "../components/common/Layout";
import InputNumber from "../components/common/InputNumber";
import NextButton from "../components/common/NextButton";

class ContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.props.navigation.navigate('VerifyContactInfo');
    }

    render() {
        return (
            <Layout>
                <View style={styles.container}>
                    <View style={{ flex: 0.4, paddingTop: 53 }}>
                        <InputNumber placeholder="55533535555" label="Phone number" value={this.state.text} onMutate={(text) => this.setState({ text })} />
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

ContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    }
});

export default ContactInfoScreen;