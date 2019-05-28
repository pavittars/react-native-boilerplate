/**
 * Sample React Native App
 * @author Pavittar Singh
 * @description Home page for login and sign up button
 * 28/05/2019
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from "../components/common/Layout";
import NextButton from '../components/common/NextButton';
import PropTypes from 'prop-types';
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
      <Layout>
        <View style={styles.container}>
          <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
            <Text>CASH <Text>OUT</Text> </Text>
          </View>
          <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 26, lineHeight: 33, color: '#6059E9' }}>Cash out your Earnings In Under 60 Seconds</Text>
              <Text style={{ fontSize: 26, lineHeight: 33, color: '#6059E9', fontWeight: 'bold', paddingTop: 30 }}>That Simple. </Text>
            </View>
          </View>
          <View style={{ flex: 0.2 }}>
            <NextButton _onPressButton={this._handleClick} _name={'SIGN UP NOW'} />
            <NextButton _onPressButton={this._handleClick} _name={'Have an account? Log in'} />
          </View>
          <View style={{ flex: 0.1 }}></View>
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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