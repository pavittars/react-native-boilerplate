import { USER_STATUS, USER_NAME, USER_PHONE_NUMBER } from "../actions/signup";

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