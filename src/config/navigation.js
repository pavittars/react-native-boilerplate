/*
 * @file: navigation.js
 * @description: Validating login user and setting initial route.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react';
import { View, ActivityIndicator, StatusBar, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';
// custom components
import Routes from './routes';
import HeaderConfig from './header-config';

class Naviagtion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            initialRouteName: 'Intro'
        }
        this.setInitialRoute = this.setInitialRoute.bind(this);
    }

    componentDidMount() {
        this.setInitialRoute(false);
    }

    setInitialRoute(userToken) {
        this.setState({ isLogin: true, initialRouteName: userToken ? 'ConnectBank' : 'Intro' });
    }

    getNavigation(initialRouteName) {
        return createAppContainer(createStackNavigator(Routes, HeaderConfig(initialRouteName)));
    }

    render() {
        let { isLogin, initialRouteName } = this.state;
        if (isLogin) {
            let AppNavigation = this.getNavigation(initialRouteName);
            return (
                <View style={{ flex: 1 }}>
                    <AppNavigation />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                    <Text>Loading...</Text>
                </View>
            );
        }

    }
}

export default Naviagtion;
