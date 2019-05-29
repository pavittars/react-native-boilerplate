import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../containers/Home";
import PersonalInfoScreen from "../containers/PersonalInfo";
import ContactInfoScreen from "../containers/ContactInfo";
import VerifyContactInfoScreen from "../containers/VerifyContactInfo";
import ConnectBankScreen from "../containers/ConnectBank";

const Navigation = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => {
            return ({
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
}, {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#6059e9',
                height: 112
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 23,
                textAlign: 'center'
            },
        },
    });


export default createAppContainer(Navigation);