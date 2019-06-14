/*
 * @file: HOME/index.js
 * @description: Home page for user
 * @date: 12.06.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import HomeLayout from '../../components/layout/homelayout';
import dollar from '../../assets/dollar.png'
import wallet from '../../assets/wallet.png'

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeLayout text="Good Morning Pavittar">
        <View style={styles.container}>
          <View style={styles.childcontainer}>

            <View style={{
              flex: moderateScale(0.21),
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}>
              <View style={[styles.action_container, styles.boxWithShadow]}>
                <View style={styles.action_childcontainer}>
                  <Image source={
                    dollar
                  } />
                </View>
                <Text style={styles.action_amount}>€ 50.00</Text>
                <Text style={styles.action_text}>Available to Cashout</Text>
              </View>

              <View style={[styles.action_container, styles.boxWithShadow]}>
                <View style={styles.action_childcontainer}>
                  <Image source={
                    wallet
                  } />
                </View>
                <Text style={styles.action_amount}>€ 200.00</Text>
                <Text style={[styles.action_text, { paddingRight: moderateScale(10) }]}>Current Balance</Text>
              </View>
            </View>

            <View >

            </View>

          </View>
        </View>
      </HomeLayout >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: moderateScale(-40),
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: moderateScale(100)
  },
  childcontainer: {
    flex: moderateScale(1),
    paddingHorizontal: moderateScale(35),
  },
  action_container: {
    flex: moderateScale(0.4),
    backgroundColor: '#fff',
    padding: moderateScale(25),
    flexDirection: 'column',
    borderRadius: moderateScale(20)
  },
  action_childcontainer: {
    alignItems: 'flex-end'
  },
  action_amount: {
    fontFamily: 'Cera Basic',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22.4448),
    color: '#6059E9',
    height: moderateScale(25),
    marginTop: 10
  },
  action_text: {
    fontFamily: 'Cera Basic',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(15),
    color: '#000000',
    marginTop: moderateScale(4)
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: moderateScale(0.3),
    shadowRadius: moderateScale(20),
    elevation: moderateScale(5)
  }
});


export default HomeScreen;