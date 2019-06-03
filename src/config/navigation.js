/*
 * @file: app-config.js
 * @description: Validating login user and setting initial route.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Routes from './routes';
import HeaderConfig from './header-config';
import Auth from '../config/auth';

// let AppNavigation = createAppContainer(createStackNavigator(Routes, HeaderConfig('Intro')));
// export default AppNavigation;

export default class Naviagtion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            initialRouteName: 'Intro'
        }
        this.setInitialRoute = this.setInitialRoute.bind(this);
    }

    componentDidMount() {
        // Auth.setData('token', 'abc').then(() => {
        Auth.getData('token').then(result => {
            this.setInitialRoute(result)
        })
        // })
    }

    setInitialRoute(userToken) {
        this.setState({ isLogin: true, initialRouteName: userToken ? 'ConnectBank' : 'Intro' });
    }

    render() {
        let { isLogin, initialRouteName } = this.state;
        if (isLogin) {
            let AppNavigation = createAppContainer(createStackNavigator(Routes, HeaderConfig(initialRouteName)));
            return (
                <View style={{ flex: 1 }}>
                    <AppNavigation />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /><StatusBar barStyle="default" /></View>
                </View>
            );
        }

    }
}