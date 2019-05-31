/*
 * @file: app-config.js
 * @description: Routes config for Navigation.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import IntroScreen from "../containers/signup/Intro";
import PersonalInfoScreen from "../containers/signup/PersonalInfo";
import ContactInfoScreen from "../containers/signup/ContactInfo";
import VerifyContactInfoScreen from "../containers/signup/VerifyContactInfo";
import ConnectBankScreen from "../containers/signup/ConnectBank";

const Routes = {
    Home: {
        screen: IntroScreen,
        navigationOptions: () => {
            return ({
                header: null,
                headerBackTitle: null,
                headerStyle: {
                    backgroundColor: '#fff'
                }
            })
        }
    },
    PersonalInfo: {
        screen: PersonalInfoScreen,
        navigationOptions: () => {
            return ({
                title: 'Personal Info',
                headerBackTitle: null
            })
        }
    },
    ContactInfo: {
        screen: ContactInfoScreen,
        navigationOptions: () => {
            return ({
                title: 'Contact Info',
                headerBackTitle: null
            })
        }
    },
    VerifyContactInfo: {
        screen: VerifyContactInfoScreen,
        navigationOptions: () => {
            return ({
                title: 'Verify Contact Info',
                headerBackTitle: null
            })
        }
    },
    ConnectBank: {
        screen: ConnectBankScreen,
        navigationOptions: () => {
            return ({
                title: 'Connect Your Bank',
                headerBackTitle: null
            })
        }
    }
};

export default Routes;