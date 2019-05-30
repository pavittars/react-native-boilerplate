/**
 * Sample React Native App
 * @author Pavittar Singh
 * @description Home page with login and sign up button
 * 28/05/2019
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NextButton from '../components/common/NextButton';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';
import Image from 'react-native-remote-svg';
import IntroLogo from '../assets/cashout.png';
import { userstatus } from '../actions/signup'
import { connect } from 'react-redux';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this._handleSignup = this._handleSignup.bind(this);
    this._handleSignIn = this._handleSignIn.bind(this);
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
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={
              IntroLogo
            }
            style={{ width: moderateScale(179), height: moderateScale(138) }}
          />
          {/* <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'Cera Basic', fontSize: 38, color: '#6059E9' }}>CASH<Text style={{ fontFamily: 'Cera Basic', fontSize: 38, fontWeight: '700', color: '#6059E9' }}>OUT</Text></Text>
          </View> */}
        </View>
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{paddingRight:50}}>
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

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  SetUserStatus: PropTypes.func.isRequired,
  userstatus: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    userstatus: state.userstatus,
  }
};

const mapDispatchToProps = (dispatch) => ({ SetUserStatus: (data) => dispatch(userstatus(data)) });

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);