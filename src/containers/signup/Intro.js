/* eslint-disable react-native/no-color-literals */
/*
 * @file: Intro.js
 * @description: Intro file for the application
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

import NextButton from "../../components/common/NextButton";
import IntroLogo from "../../assets/cashout.png";
import { userstatus, clearState } from "../../actions/signup";
import { paychecklistingAction } from "../../actions/paycheck";


class IntroScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
    this._handleSignup = this._handleSignup.bind(this);
    this._handleSignIn = this._handleSignIn.bind(this);
  }

  componentDidMount() {
    this.props.clearStore();
  }

  _handleSignup() {
    this.props.SetUserStatus('inactive');
    this.props.navigation.navigate('PersonalInfo');
  }

  _handleSignIn() {
    this.props.SetUserStatus('active');
    this.props.navigation.navigate('ContactInfo');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" />
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={
              IntroLogo
            }
            style={{ width: moderateScale(179), height: moderateScale(138) }}
          />
        </View>
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ paddingRight: 50 }}>
            <Text style={{ fontSize: moderateScale(26), lineHeight: moderateScale(33), color: '#6059E9', fontFamily: 'Cera Basic' }}>Cash out your Earnings In Under 60 Seconds</Text>
            <Text style={{ fontSize: moderateScale(26), lineHeight: moderateScale(33), color: '#6059E9', fontWeight: 'bold', paddingTop: moderateScale(30), fontFamily: 'Cera Basic' }}>That Simple. </Text>
          </View>
        </View>
        <View style={{ flex: 0.2 }}>
          <NextButton _onPressButton={this._handleSignup} _name={'SIGN UP NOW'} />
          <NextButton type={'reverse'} _onPressButton={this._handleSignIn} _name={'Have an account? Log in'} />
        </View>
        <View style={{ flex: 0.1 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40
  }
});

IntroScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  SetUserStatus: PropTypes.func.isRequired,
  userstatus: PropTypes.string,
  clearStore: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    userstatus: state.userstatus,
  }
};

const mapDispatchToProps = (dispatch) => ({ SetUserStatus: (data) => dispatch(userstatus(data)), paychecklisting: (data) => dispatch(paychecklistingAction(data)), clearStore: () => dispatch(clearState()) });

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);