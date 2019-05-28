import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import PropTypes from 'prop-types';
import Layout from "../components/common/Layout";

class PersonalInfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <Layout>
                <View style={{flex:1}}>
                    <Text>Personal Info</Text>
                    <Text>Full Name</Text>
                    {/* <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="john Doe"
                /> */}
                    <Button
                        onPress={() => this.props.navigation.navigate('ContactInfo')}
                        title="Next"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </Layout>
        );
    }
}

PersonalInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default PersonalInfoScreen;