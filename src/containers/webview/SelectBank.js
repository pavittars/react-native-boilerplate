/*
 * @file: SelectBank.js
 * @description: select bank wbview for the application
 * @date: 04.06.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import querystring from 'querystring';
import { bindActionCreators } from 'redux';
// custom components
import { saveBankToken } from '../../actions/signup';
import { showAlert } from '../../constants/util';
import MESSAGES from '../../constants/messages';

class SelectBankScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hideWBView: false
        }
        this._extractCode = this._extractCode.bind(this);
        this._getCode = this._getCode.bind(this);
    }

    // extract query param from url
    _extractCode(_url) {
        const url = querystring.parse(_url);
        const code = Object.keys(url).find(x => x.includes('truelayer-redirect?code'));
        if (url[code]) {
            this.setState({ code: url[code], hideWBView: true }, () => {
                this._getCode();
            });
        }
    }

    // get bank detail of the login user
    _getCode() {
        let { code } = this.state;
        let { usertoken, saveBankTokenDetail, navigation } = this.props;
        let payload = {
            userId: usertoken.userId,
            code
        };
        saveBankTokenDetail(payload, (result) => {
            if (result.status) {
                navigation.navigate('SelectPayCheck');
            } else {
                showAlert(MESSAGES.genericError);
            }
        });
    }

    render() {
        let { hideWBView } = this.state;
        return (
            <View style={{ flex: 1 }} >
                {!hideWBView && <WebView
                    onNavigationStateChange={event => {
                        if (event.url.includes('truelayer-redirect')) {
                            this._extractCode(event.url);
                        }
                    }}
                    javaScriptEnabled={true}
                    allowsInlineMediaPlayback={true}
                    source={{ uri: 'http://172.24.5.139:3000/connectBank/5cf0aea849f2ff1c96cc1771' }}
                />}
                {hideWBView && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                    <Text>Loading...</Text>
                </View>}
            </View>
        );
    }
}

SelectBankScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    usertoken: PropTypes.object.isRequired,
    saveBankTokenDetail: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        usertoken: state.usertoken
    }
};

const mapDispatchToProps = (dispatch) => ({
    saveBankTokenDetail: () => bindActionCreators(saveBankToken, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBankScreen);