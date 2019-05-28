import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../containers/Home";
import PersonalInfoScreen from "../containers/PersonalInfo";
import ContactInfoScreen from "../containers/ContactInfo";
import VerifyContactInfoScreen from "../containers/VerifyContactInfo";
import ConnectBankScreen from "../containers/ConnectBank";

const Navigation = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    PersonalInfo: {
        screen: PersonalInfoScreen,
        navigationOptions: ({ navigation }) => {
            let title = navigation ? 'Personal Info' : 'Personal Info';
            return ({
                title,
                headerBackTitle: null
            })
        }
    },
    ContactInfo: {
        screen: ContactInfoScreen
    },
    VerifyContactInfo: {
        screen: VerifyContactInfoScreen
    },
    ConnectBank: {
        screen: ConnectBankScreen
    }
}, {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#6059e9'
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