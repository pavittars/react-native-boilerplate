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
import Image from 'react-native-remote-svg'
import IntroLogo from '../assets/intrologo.svg';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }


  _handleClick() {
    this.props.navigation.navigate('PersonalInfo');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={
              IntroLogo
            }
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'Cera Basic', fontSize: 38, color: '#6059E9' }}>CASH<Text style={{ fontFamily: 'Cera Basic', fontSize: 38, fontWeight: '700', color: '#6059E9' }}>OUT</Text></Text>
          </View>
        </View>
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: moderateScale(26), lineHeight: moderateScale(33), color: '#6059E9', fontFamily: 'Cera Basic' }}>Cash out your Earnings In Under 60 Seconds</Text>
            <Text style={{ fontSize: moderateScale(26), lineHeight: moderateScale(33), color: '#6059E9', fontWeight: 'bold', paddingTop: moderateScale(30), fontFamily: 'Cera Basic' }}>That Simple. </Text>
          </View>
        </View>
        <View style={{ flex: 0.2 }}>
          <NextButton _onPressButton={this._handleClick} _name={'SIGN UP NOW'} />
          <NextButton type={'reverse'} _onPressButton={this._handleClick} _name={'Have an account? Log in'} />
        </View>
        <View style={{ flex: 0.1 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    paddingHorizontal: 40
  }
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   }
// };

// const mapDispatchToProps = (dispatch) => bindActionCreators({ increment, decrement }, dispatch);

export default HomeScreen;