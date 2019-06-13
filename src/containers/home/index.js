/*
 * @file: HOME/index.js
 * @description: Home page for user
 * @date: 12.06.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import HomeLayout from '../../components/layout/homelayout';


class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeLayout>
        <View style={{
          // position: 'absolute',
          // top: 0,
          // bottom: 0,
          // left: 0,
          // right: 0,
          borderWidth: 1,
          borderColor: 'red',
          zIndex: 100
        }}>
          {/* <View style={styles.container}> */}
            <Text>HOME</Text>
          {/* </View> */}
        </View>
      </HomeLayout>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 40,
//     borderWidth: 1,
//     borderColor: '#000'
//   }
// });


export default HomeScreen;