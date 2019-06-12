import RestClient from '../config/RestClient';
import MESSAGES from '../constants/messages';
import { PAYCHECK_LISTING, SAVE_PAYCHECK, BANK_CODE} from './action-constant';

export const paychecklistingAction = (data) => {
  return {
    type: PAYCHECK_LISTING,
    payload: data
  };
};

export const savepaycheckAction = (data) => {
  return {
    type: SAVE_PAYCHECK,
    payload: data
  };
};

export const bankCode = (data) => {
  return {
    type: BANK_CODE,
    payload: data
  };
};

export const truelayerSuccess = (params, cb) => {
  return (dispatch, getState) => {
    let { usertoken: { token } } = getState();
    RestClient.post('truelayerCode', params, token)
      .then(result => {
        if (result.status === 200) {
          dispatch(bankCode(params.code));
          cb({ status: true, message: result.data.message });
        } else {
          cb({ status: false, message: result.data.message });
        }
      })
      .catch(() => {
        cb({ status: false, message: MESSAGES.genericError });
      });
  };
};

export const paychecklisting = (params, cb) => {
  return (dispatch, getState) => {
    let { usertoken: { token } } = getState();
    RestClient.post('fetchTransactions', params, token)
      .then(result => {
        if (result.status === 200) {
          dispatch(paychecklistingAction(result.data.data));
          cb({ status: true, message: result.data.message });
        } else {
          cb({ status: false, message: result.data.message });
        }
      })
      .catch(() => {
        cb({ status: false, message: MESSAGES.genericError });
      });
  };
};

export const savepaycheck = (params, cb) => {
  return (dispatch, getState) => {
    let { usertoken: { token } } = getState();
    RestClient.post('confirmPaycheck', params, token)
      .then(result => {
        if (result.status === 200) {
          dispatch(savepaycheckAction(result.data.data));
          cb({ status: true, message: result.data.message });
        } else {
          cb({ status: false, message: result.data.message });
        }
      })
      .catch(() => {
        cb({ status: false, message: MESSAGES.genericError });
      });
  };
};