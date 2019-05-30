import { USER_STATUS } from "../actions/signup";

export const userstatus = (state = '', action) => {
    switch (action.type) {
        case USER_STATUS:
                return action.payload
        default:
            return state;
    }
}