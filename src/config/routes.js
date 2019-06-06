/*
 * @file: routes.js
 * @description: Routes config for Navigation.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

import CONSTANT from "../constants/Constant";
import IntroScreen from "../containers/signup/Intro";
import PersonalInfoScreen from "../containers/signup/PersonalInfo";
import ContactInfoScreen from "../containers/signup/ContactInfo";
import VerifyContactInfoScreen from "../containers/signup/VerifyContactInfo";
import ConnectBankScreen from "../containers/signup/ConnectBank";
import SelectPayCheckScreen from "../containers/paycheck/SelectPayCheck";
import PayCheckDetailScreen from "../containers/paycheck/PayCheckDetail";
import EditPayCheckScreen from "../containers/paycheck/EditPayCheck";
import PayCheckAddedScreen from "../containers/paycheck/PayCheckAdded";
import SelectBankScreenScreen from "../containers/webview/SelectBank";



const Routes = {
    Intro: {
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
                title: CONSTANT.routeTitles.PersonalInfo,
                headerBackTitle: null
            })
        }
    },
    ContactInfo: {
        screen: ContactInfoScreen,
        navigationOptions: () => {
            return ({
                title: CONSTANT.routeTitles.ContactInfo,
                headerBackTitle: null
            })
        }
    },
    VerifyContactInfo: {
        screen: VerifyContactInfoScreen,
        navigationOptions: () => {
            return ({
                title: CONSTANT.routeTitles.VerifyContactInfo,
                headerBackTitle: null
            })
        }
    },
    ConnectBank: {
        screen: ConnectBankScreen,
        navigationOptions: () => {
            return ({
                title: CONSTANT.routeTitles.ConnectBank,
                headerBackTitle: null
            })
        }
    },
    SelectPayCheck: {
        screen: SelectPayCheckScreen,
        navigationOptions: () => {
            return ({
                title: CONSTANT.routeTitles.SelectPayCheck,
                headerBackTitle: null
            })
        }
    },
    PayCheckDetail: {
        screen: PayCheckDetailScreen,
        navigationOptions: () => {
            return ({
                title: CONSTANT.routeTitles.PayCheckDetail,
                headerBackTitle: null
            })
        }
    },
    EditPayCheck: {
        screen: EditPayCheckScreen,
        navigationOptions: () => {
            return ({
                title: CONSTANT.routeTitles.EditPayCheck,
                headerBackTitle: null
            })
        }
    },
    PayCheckAdded: {
        screen: PayCheckAddedScreen,
        navigationOptions: () => {
            return ({
                title: CONSTANT.routeTitles.PayCheckAdded,
                headerBackTitle: null
            })
        }
    },
    SelectBankScreen: {
        screen: SelectBankScreenScreen,
        navigationOptions: () => {
            return ({
                header: null,
                title: CONSTANT.routeTitles.SelectBank,
                headerBackTitle: null
            })
        }
    },
};

export default Routes;