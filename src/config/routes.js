import HomeScreen from "../containers/Home";
import PersonalInfoScreen from "../containers/PersonalInfo";
import ContactInfoScreen from "../containers/ContactInfo";
import VerifyContactInfoScreen from "../containers/VerifyContactInfo";
import ConnectBankScreen from "../containers/ConnectBank";

const Routes = {
    Home: {
        screen: HomeScreen,
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
                title: 'Connect Bank',
                headerBackTitle: null
            })
        }
    }
};

export default Routes;