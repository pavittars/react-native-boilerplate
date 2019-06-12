/*
 * @file: reducers/paycheck.js
 * @description: paycheck reducers
 * @date: 10.06.2019
 * @author: Pavittar Singh
 * */

import { PAYCHECK_LISTING, SAVE_PAYCHECK, BANK_CODE } from "../actions/action-constant";

export const truelayercode = (state = '', action) => {
    switch (action.type) {
        case BANK_CODE:
            return action.payload
        default:
            return state;
    }
};

export const paychecklisting = (state = [], action) => {
    switch (action.type) {
        case PAYCHECK_LISTING:
            return action.payload
        default:
            return state;
    }
};

export const savepaycheck = (state = {}, action) => {
    switch (action.type) {
        case SAVE_PAYCHECK:
            return action.payload
        default:
            return state;
    }
};