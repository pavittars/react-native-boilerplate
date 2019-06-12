/*
 * @file: reducers/signup.js
 * @description: signup reducer file for the application
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import { USER_STATUS, USER_NAME, USER_PHONE_NUMBER, USER_TOKEN, BANK_TOKEN } from "../actions/action-constant";

export const userstatus = (state = '', action) => {
    switch (action.type) {
        case USER_STATUS:
            return action.payload
        default:
            return state;
    }
};

export const username = (state = '', action) => {
    switch (action.type) {
        case USER_NAME:
            return action.payload
        default:
            return state;
    }
};

export const userphonenumber = (state = '', action) => {
    switch (action.type) {
        case USER_PHONE_NUMBER:
            return action.payload
        default:
            return state;
    }
};

export const usertoken = (state = {}, action) => {
    switch (action.type) {
        case USER_TOKEN:
            return { ...state, ...action.payload }
        default:
            return state;
    }
};

export const banktoken = (state = {}, action) => {
    switch (action.type) {
        case BANK_TOKEN:
            return { ...state, ...action.payload }
        default:
            return state;
    }
};