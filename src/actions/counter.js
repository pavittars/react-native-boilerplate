export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = (data) => (dispatch) => {
    ++data;
    dispatch({
        type: INCREMENT_COUNTER,
        data
    });
}

export const decrement = (data) => (dispatch) => {
    --data;
    dispatch({
        type: DECREMENT_COUNTER,
        data
    });
}