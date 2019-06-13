/*
 * @file: EditPayCheck.js
 * @description: Paycheck edit detail screen for the application
 * @date: 10.06.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import idx from 'idx';
import moment from 'moment';
import { bindActionCreators } from 'redux';

import InputText from '../../components/common/InputText';
import NextButton from '../../components/common/NextButton';
import Layout from '../../components/common/Layout';
import CONSTANT from '../../constants/Constant';
import { savepaycheck } from '../../actions/paycheck';
import { PayCheckDates, getNextDate } from '../../constants/util';

class EditPayCheckScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paycheckName: '',
            paycheck: {},
            paidTime: CONSTANT.PayCheckDefaultTime
        }
        this._onMutate = this._onMutate.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._handleDropDown = this._handleDropDown.bind(this);
        this._getAddedDays = this._getAddedDays.bind(this);
    }

    componentDidMount() {
        let { navigation, paychecklisting } = this.props;
        const paycheckId = idx(navigation, _ => _.state.params.paycheckId);
        const paycheck = paychecklisting.find(x => x.transaction_id === paycheckId);
        const paycheckName = paycheck.description;
        this.setState({ paycheck, paycheckName });
    }

    _handleClick = () => {
        let { paycheck, paidTime } = this.state;
        let { navigation, usertoken, addPayCheck } = this.props;
        let time = CONSTANT.PayCheckTime.find(x => x.id === paidTime);
        addPayCheck({
            "userId": usertoken.userId,
            "paycheckDates": PayCheckDates(paycheck.timestamp, paidTime),
            "paycheckAmount": paycheck.amount,
            "paycheckEmployer": paycheck.description,
            "upcomingPaychecks": time.id
        }, () => {
            navigation.navigate('PayCheckAdded');
        });
    }

    _onMutate = (paycheckName) => {
        this.setState({ paycheckName });
    }

    _handleDropDown = (paidTime) => {
        this.setState({ paidTime });
    }

    _getAddedDays = (timestamp) => {
        let date = moment(timestamp);
        let { paidTime } = this.state;
        if (paidTime === CONSTANT.PayCheckTime[0].value) {
            return [date.format('DD-MM-YYYY'), date.add(7, 'days').format('DD-MM-YYYY'), date.add(7, 'days').format('DD-MM-YYYY')];
        } else if (paidTime === CONSTANT.PayCheckTime[1].value) {
            return [date.format('DD-MM-YYYY'), date.add(15, 'days').format('DD-MM-YYYY'), date.add(15, 'days').format('DD-MM-YYYY')];
        }
        return [date.format('DD-MM-YYYY'), date.add(1, 'month').format('DD-MM-YYYY'), date.add(1, 'month').format('DD-MM-YYYY')];
    }

    render() {
        let { paycheck, paycheckName, paidTime } = this.state;
        return (
            <Layout>
                <KeyboardAvoidingView style={styles.container}>
                    <View style={{ flex: 0.8 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 64 }}>
                            <InputText placeholder="Some Great Paycheck" label="Paycheck Name"
                                value={paycheckName}
                                onMutate={this._onMutate}
                                maxlength={15}
                                labelStyle={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}
                                inputStyle={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#000000', opacity: 0.4, marginTop: 7 }} disable={false}/>
                        </View>

                        <View style={{ marginTop: 21 }}>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}>
                                Paycheck Amount
                            </Text>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#53B263', marginTop: 7 }}>
                                £{paycheck.amount}
                            </Text>
                        </View>

                        <View style={{ marginTop: 21 }}>
                            <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}>
                                I get paid
                            </Text>
                            <Dropdown
                                data={CONSTANT.PayCheckTime}
                                value={this.state.paidTime}
                                onChangeText={(value) => this._handleDropDown(value)}
                            />
                        </View>

                        <View style={{ marginTop: 21, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}>On the</Text>
                                <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#000000', opacity: 0.4 }}>{moment(paycheck.timestamp).format('DD')}th</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}>And the</Text>
                                <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#000000', opacity: 0.4 }}>{getNextDate(paycheck.timestamp, paidTime)}th</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 0.2 }}>
                        <NextButton _onPressButton={this._handleClick} _name={'CONFIRM'} />
                    </View>
                </KeyboardAvoidingView>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    }
});

EditPayCheckScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    usertoken: PropTypes.object.isRequired,
    paychecklisting: PropTypes.array.isRequired,
    addPayCheck: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ paychecklisting: state.paychecklisting, usertoken: state.usertoken });

const mapDispatchToProps = (dispatch) => ({ addPayCheck: bindActionCreators(savepaycheck, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(EditPayCheckScreen);