/*
 * @file: messages.js
 * @description: Messages file for the application
 * @date: 28.05.2019
 * @author: Pavittar Singh
 * */


const MESSAGES = {
    requiredMessage: (error) => `Please Enter ${error}`,
    ValidateMessage: (error) => `Please Enter Valid ${error}`,
    genericError: 'SomeThing went wrong'
};
export default MESSAGES;