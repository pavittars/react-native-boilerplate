/*
 * @file: SelectBank.js
 * @description: select bank wbview for the application
 * @date: 04.06.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { bindActionCreators } from 'redux';
// custom components
import { truelayerSuccess } from '../../actions/paycheck';
import { showToast } from '../../constants/util';
import Connection from '../../constants/Connection';
import MESSAGES from '../../constants/messages';


class SelectBankScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url_set: true
        }
        this._extractCode = this._extractCode.bind(this);
    }

    // extract query param from url
    _extractCode(_url) {
        let { navigation, truelayerSuccess, usertoken } = this.props;
        if (_url.includes('/trueLayerSucess?code') && this.state.url_set) {
            this.setState({ url_set: false }, () => {
                truelayerSuccess({ userId: usertoken.userId, code: _url.split('/trueLayerSucess?code=')[1] }, () => { 
                    navigation.navigate('SelectPayCheck');
                });
            });
        } else if (_url.includes('/trueLayerError') && this.state.url_set) {
            this.setState({ url_set: false }, () => {
                showToast({ message: MESSAGES.genericError, duration: 4000 });
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    onNavigationStateChange={event => {
                        this._extractCode(event.url);
                    }}
                    javaScriptEnabled={true}
                    allowsInlineMediaPlayback={true}
                    source={{ uri: Connection.getResturl(`connectBank/${this.props.usertoken.userId}`) }}
                />
            </View>
        );
    }
}

SelectBankScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    usertoken: PropTypes.object.isRequired,
    truelayerSuccess: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    usertoken: state.usertoken
});

const mapDispatchToProps = (dispatch) => ({
    truelayerSuccess: bindActionCreators(truelayerSuccess, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBankScreen);