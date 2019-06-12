/*
 * @file: util.js
 * @description: common util file for the application
 * @date: 28.05.2019
 * @author: Pavittar Singh
 * */


import { Alert } from 'react-native';
import moment from 'moment';

export const showAlert = (error) => {
    Alert.alert(
        'Alert',
        error,
    );
};

export const validateAlphabet = (text) => {
    return /^[a-zA-Z ]+$/.test(text);
};

export const ValidateCountryCode = (text) => {
    return /^(\+?\d{1,3}|\d{1,4})$/gm.test(text);
};

export const PayCheckDates = (timestamp) => {
    let currentDate = moment(timestamp);
    return [{ day: currentDate.format('DD'), month: currentDate.format('MMM') }, {
        day: currentDate.add(1, 'months').format('DD'),
        month: currentDate.add(1, 'months').format('MMM')
    }]
};

export const validatePhoneNumber = (text) => {
    return /^((\+\d{1,3}(-|)?\(?\d\)?(-|)?\d{1,5})|(\(?\d{2,6}\)?))(-|)?(\d{3,4})(-|)?(\d{4})((x|ext)\d{1,5}){0,1}$/.test(text);
};
