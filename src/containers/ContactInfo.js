import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import PropTypes from 'prop-types';
class ContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : ''
        };
    }
    render() {
        return (
            <View>
                <Text>Contact Info</Text>
                <Text>Phone Number</Text>
                {/* <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="john Doe"
                /> */}
                <Button
                    onPress={() => this.props.navigation.navigate('VerifyContactInfo')}
                    title="Next"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
            </View>
        );
    }
}

ContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default ContactInfoScreen;