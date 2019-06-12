/*
 * @file: VerifyContactInfo.js
 * @description: Select paycheck screen for the application.
 * @date: 03.06.2019
 * @author: Pavittar Singh
 * */


import React, { Component } from 'react';
import { View, StyleSheet, BackHandler, Alert } from "react-native";
import { moderateScale } from "react-native-size-matters";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation';
import { bindActionCreators } from 'redux';

// custom components
import Layout from "../../components/common/Layout";
import Listing from "../../components/Listing";
import { paychecklisting } from '../../actions/paycheck';

class SelectPayCheckScreen extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this.handleBackPress = this.handleBackPress.bind(this);
    }

    static navigationOptions = () => {
        return {
            headerLeft: (<HeaderBackButton onPress={() => {
                Alert.alert(
                    'Logout',
                    'Are you sure want to logout?',
                    [
                        { text: 'Yes', onPress: () => BackHandler.exitApp() },
                        {
                            text: 'No',
                            // eslint-disable-next-line no-console
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        }
                    ],
                    { cancelable: false },
                );
            }} tintColor="#fff" />)
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.getpaychecklisting({ userId: this.props.userToken.userId }, () => { });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    handleBackPress() {
        Alert.alert(
            'Logout',
            'Are you sure want to logout?',
            [
                { text: 'Yes', onPress: () => BackHandler.exitApp() },
                {
                    text: 'No',
                    // eslint-disable-next-line no-console
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                }
            ],
            { cancelable: false },
        );
        return true;
    }


    _handleClick(_Item) {
        let { navigation } = this.props;
        navigation.navigate('PayCheckDetail', {
            paycheckId: _Item.transaction_id
        });
    }

    render() {
        let { paychecklisting } = this.props;
        return (
            <Layout>
                <View style={styles.container}>
                    <Listing list={paychecklisting} _handleClick={this._handleClick} />
                </View>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(32),
        paddingTop: moderateScale(30)
    }
});

SelectPayCheckScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    userToken: PropTypes.object.isRequired,
    paychecklisting: PropTypes.array.isRequired,
    getpaychecklisting: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    userToken: state.usertoken,
    paychecklisting: state.paychecklisting,
})

const mapDispatchToProps = (dispatch) => ({
    getpaychecklisting: bindActionCreators(paychecklisting, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPayCheckScreen);