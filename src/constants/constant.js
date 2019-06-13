/*
 * @file: constants.js
 * @description: Constant file for the application
 * @date: 28.05.2019
 * @author: Pavittar Singh
 * */

const CONSTANT = {
    routeTitles: {
        PersonalInfo: 'Personal Info',
        SelectPayCheck: 'Select your paycheck',
        ConnectBank: 'Connect Your Bank',
        VerifyContactInfo: 'Verify Contact Info',
        ContactInfo: 'Contact Info',
        PayCheckDetail: 'Paycheck Details',
        EditPayCheck: 'Edit Paycheck',
        PayCheckAdded: 'Paycheck Added',
        SelectBank: 'Select Bank'
    },
    onboardingStatus: [{
        id: 1,
        route: 'ConnectBank'
    },
    {
        id: 2,
        route: 'SelectPayCheck',
    }],
    PayCheckTime: [
        { id: 'biWeekly', value: 'In every week' },
        { id: 'twiceMonth', value: 'Twice a month' },
        { id: 'month', value: 'Month' }
    ],
    PayCheckDefaultTime: 'month'
};
export default CONSTANT;