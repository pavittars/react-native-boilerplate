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
}, {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#6059e9',
                height: 112,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                elevation:0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'white',
                fontSize: 18,
                lineHeight: 23,
                textAlign: 'center',
                fontFamily:'Cera Basic'
            },
        },
    });


export default createAppContainer(Navigation);