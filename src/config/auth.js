/*
 * @file: app-config.js
 * @description: Async storage for saving token and data to be persisted even after app closes.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */


// eslint-disable-next-line no-console 
import AsyncStorage from '@react-native-community/async-storage';

class Auth {
    static setData = async (key, data) => {
        try {
            const value = await AsyncStorage.setItem([key], data);
            return value
        } catch (e) {
            // saving error
        }
    }

    static getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem([key]) || undefined;
            return value;
        } catch (e) {
            // error reading value
        }
    }

    static removeData = async (key) => {
        try {
            await AsyncStorage.removeItem([key]);
        } catch (e) {
            // remove error
        }
        console.log('Done.');
    }

}

export default Auth;