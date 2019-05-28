import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/counter";

export const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return action.data;
        case DECREMENT_COUNTER:
            return action.data;
        default:
            return state;
    }
}