/*
 * @file: PayCheckDetail.js
 * @description: Paycheck detail screen for the application
 * @date: 03.06.2019
 * @author: Pavittar Singh
 * */


/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import idx from 'idx';
import { connect } from 'react-redux';
// custom components
import Layout from '../../components/common/Layout';
import NextButton from '../../components/common/NextButton';
import DateCard from '../../components/DateCard';
import { PayCheckDates, getPaycheckDayMonth, showToast } from '../../constants/util';
import CONSTANT from '../../constants/Constant';
import moment from 'moment';
import { savepaycheck } from '../../actions/paycheck';
import { bindActionCreators } from 'redux';


class PayCheckDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paycheck: {}
        };
        this._onEditClick = this._onEditClick.bind(this)
        this._handleValidate = this._handleValidate.bind(this)
    }

    componentDidMount() {
        let { navigation, paychecklisting } = this.props;
        const paycheckId = idx(navigation, _ => _.state.params.paycheckId);
        const paycheck = paychecklisting.find(x => x.transaction_id === paycheckId);
        this.setState({ paycheck });
    }

    _onEditClick() {
        this.props.navigation.navigate('EditPayCheck', {
            paycheckId: this.state.paycheck.transaction_id
        });
    }

    _handleValidate() {
        let { usertoken, addPayCheck, navigation } = this.props;
        let { paycheck } = this.state;
        addPayCheck({
            "userId": usertoken.userId,
            "paycheckDates": PayCheckDates(paycheck.timestamp, CONSTANT.PayCheckDefaultTime),
            "paycheckAmount": paycheck.amount,
            "paycheckEmployer": paycheck.description,
            "upcomingPaychecks": CONSTANT.PayCheckDefaultTime
        }, (result) => {
            if (result.status) {
                navigation.navigate('PayCheckAdded');
            } else {
                showToast({ message: result.message });
            }
        });
    }

    render() {
        let { paycheck } = this.state;
        let dates = getPaycheckDayMonth(paycheck.timestamp, CONSTANT.PayCheckDefaultTime);
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={{ flex: 0.8, paddingTop: 64 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#000000' }}>{paycheck.description}</Text>
                            <TouchableOpacity onPress={this._onEditClick} style={{
                                backgroundColor: '#F0EFFF',
                                borderRadius: 6.02564,
                                padding: 5,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 12.0513, fontFamily: 'CeraBasic-Bold', color: '#6059E9', }}>EDIT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 36 }}>
                            <Text style={styles.text}>Estimated amount</Text>
                            <Text style={{
                                fontFamily: 'Cera Basic',
                                fontSize: 20,
                                lineHeight: 25, color: '#53B263'
                            }}>£{paycheck.amount}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 36 }}>
                            <Text style={styles.text}>On the <Text style={styles.textBold}>{moment(paycheck.timestamp).format('D')}th</Text> of every <Text style={styles.textBold}>month</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 36 }}>
                            <Text style={styles.text}>Upcoming paychecks</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 19, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                            {dates && dates.map((x, i) =>
                                <View key={i}>
                                    <DateCard index={i} month={x.month} day={x.day} />
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton style={''} _onPressButton={this._handleValidate} _name={'CONFIRM'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    },
    text: {
        fontSize: 15,
        lineHeight: 19,
        fontFamily: 'Cera Basic'
    },
    textBold: {
        fontFamily: 'CeraBasic-Bold'
    },
    price: {

    }
});

PayCheckDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    usertoken: PropTypes.object.isRequired,
    paychecklisting: PropTypes.array.isRequired,
    addPayCheck: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ paychecklisting: state.paychecklisting, usertoken: state.usertoken });

const mapDispatchToProps = (dispatch) => ({ addPayCheck: bindActionCreators(savepaycheck, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(PayCheckDetailScreen);