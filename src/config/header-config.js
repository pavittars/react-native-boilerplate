/*
 * @file: header-config.js
 * @description: Navigation header styling config.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

const HeaderConfig = (initialRouteName) => ({
    initialRouteName,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#6059e9',
            height: 112,
            borderBottomWidth: 0,
            borderColor: 'none',
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white',
            fontSize: 18,
            lineHeight: 23,
            textAlign: 'center',
            fontFamily: 'Cera Basic'
        },
    },
});

export default HeaderConfig;