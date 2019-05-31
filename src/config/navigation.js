import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Routes from './routes';
import HeaderConfig from './header-config';
import Auth from '../config/auth';

export default class Naviagtion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            initialRouteName: 'Home'
        }
        this.setInitialRoute = this.setInitialRoute.bind(this);
    }

    componentDidMount() {
        Auth.setData('token', 'abc').then(() => {
            Auth.getData('token').then(result => {
                this.setInitialRoute(result)
            })
        })
    }

    setInitialRoute(userToken) {
        this.setState({ isLogin: true, initialRouteName: userToken ? 'ConnectBank' : 'Home' });
    }

    render() {
        let { isLogin, initialRouteName } = this.state;
        let AppNavigation = createAppContainer(createStackNavigator(Routes, HeaderConfig(initialRouteName)));
        return (
            <View style={{ flex: 1 }}>
                {isLogin && <AppNavigation />}
                {!isLogin && <View><ActivityIndicator /><StatusBar barStyle="default" /></View>}
            </View>
        );
    }
}