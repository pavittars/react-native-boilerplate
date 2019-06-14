/*
 * @file: util.js
 * @description: common util file for the application
 * @date: 28.05.2019
 * @author: Pavittar Singh
 * */


import { Alert } from 'react-native';
import moment from 'moment';
import { showMessage } from "react-native-flash-message";
import MESSAGES from './messages';
import CONSTANT from './Constant';

export const showAlert = (error) => {
    Alert.alert(
        'Alert',
        error,
    );
};

// type = "none" | "default" | "info" | "success" | "danger" | "warning";
export const showToast = ({ message = MESSAGES.genericError, type = 'danger', duration = 2000 }) => {
    showMessage({
        duration,
        message,
        type
    });
}
export const validateAlphabet = (text) => {
    return /^[a-zA-Z ]+$/.test(text);
};

export const ValidateCountryCode = (text) => {
    return /^(\+?\d{1,3}|\d{1,4})$/gm.test(text);
};

export const getPaycheckDayMonth = (timestamp) => {
    let date = moment(timestamp).add(1, 'month');
    let nextdate = moment(timestamp).add(2, 'month');
    return [{
        day: date.format('DD'),
        month: date.format('MMM')
    }, {
        day: nextdate.format('DD'),
        month: nextdate.format('MMM')
    }]
};

export const PayCheckDates = (timestamp, paidTime) => {
    let date = moment(timestamp);
    if (paidTime === CONSTANT.PayCheckTime[0].value) {
        return [date.add(7, 'days').format('YYYY-MM-DD'), date.add(7, 'days').format('YYYY-MM-DD'), date.add(7, 'days').format('YYYY-MM-DD')];
    } else if (paidTime === CONSTANT.PayCheckTime[1].value) {
        return [date.add(15, 'days').format('YYYY-MM-DD'), date.add(15, 'days').format('YYYY-MM-DD'), date.add(15, 'days').format('YYYY-MM-DD')];
    }
    return [date.add(1, 'month').format('YYYY-MM-DD'), date.add(1, 'month').format('YYYY-MM-DD'), date.add(1, 'month').format('YYYY-MM-DD')];
};

export const getNextDate = (timestamp, paidTime) => {
    let date = moment(timestamp);
    if (paidTime === CONSTANT.PayCheckTime[0].value) {
        return date.add(7, 'days').format('DD');
    } else if (paidTime === CONSTANT.PayCheckTime[1].value) {
        return date.add(15, 'days').format('DD');
    }
    return date.add(1, 'month').format('DD');
}

export const validatePhoneNumber = (text) => {
    return /^((\+\d{1,3}(-|)?\(?\d\)?(-|)?\d{1,5})|(\(?\d{2,6}\)?))(-|)?(\d{3,4})(-|)?(\d{4})((x|ext)\d{1,5}){0,1}$/.test(text);
};
