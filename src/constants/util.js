import { Alert } from 'react-native';

export const validateAlphabet = (text) => {
    return /^[a-zA-Z ]+$/.test(text);
};

export const validatePhoneNumber = (text) => {
    return /^((\+\d{1,3}(-|)?\(?\d\)?(-|)?\d{1,5})|(\(?\d{2,6}\)?))(-|)?(\d{3,4})(-|)?(\d{4})((x|ext)\d{1,5}){0,1}$/.test(text);
};

export const showAlert = (error) => {
    Alert.alert(
        'Alert',
        error,
    );
}