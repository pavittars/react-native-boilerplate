import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, Button } from "react-native";

class VerifyContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <View>
                <Text>Verify Contact Info</Text>
                <Text>Code </Text>
                {/* <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="john Doe"
                /> */}
                <Button
                    onPress={() => this.props.navigation.navigate('ConnectBank')}
                    title="Next"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

VerifyContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default VerifyContactInfoScreen;