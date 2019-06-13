import RestClient from '../config/RestClient';
import MESSAGES from '../constants/messages';

import { USER_STATUS, USER_NAME, USER_PHONE_NUMBER, USER_TOKEN, BANK_TOKEN, CLEAR_STATE } from './action-constant';


export const userstatus = (data) => {
  return {
    type: USER_STATUS,
    payload: data
  };
}

export const username = (data) => {
  return {
    type: USER_NAME,
    payload: data
  };
}

export const userphonenumber = (data) => {
  return {
    type: USER_PHONE_NUMBER,
    payload: data
  };
}

export const userToken = (data) => {
  return {
    type: USER_TOKEN,
    payload: data
  };
}

export const bankToken = (data) => {
  return {
    type: BANK_TOKEN,
    payload: data
  };
}

export const clearState = (data) => {
  return {
    type: CLEAR_STATE,
    payload: data
  };
}



export const confirmVerificationCode = (params, cb) => {
  return dispatch => {
    RestClient.post('confirmOtp', params)
      .then(result => {
        if (result.status === 200) {
          dispatch(userToken(result.data.data));
          cb({ status: true, message: result.message, onboardingStatus: result.data.data.onboardingStatus });
        } else {
          cb({ status: false, message: result.data.message });
        }
      })
      .catch(() => {
        cb({ status: false, message: MESSAGES.genericError });
      });
  };
};

export const saveBankToken = (params, cb) => {
  return (dispatch, getState) => {
    let { usertoken: { token } } = getState();
    RestClient.post('truelayerCode', params, token)
      .then(result => {
        if (result.status === 200) {
          dispatch(bankToken(result.data.data));
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

export const signup = (params, cb) => (dispatch, getState) => {
  let { usertoken: { token } } = getState();
  RestClient.post('smsAuth', params, token)
    .then(result => {
      if (result.status === 200) {
        cb({ status: true, message: result.data.message });
      } else {
        cb({ status: false, message: result.data.message });
      }
    })
    .catch(() => {
      cb({ status: false, message: MESSAGES.genericError });
    });
};

export const login = (params, cb) => (dispatch, getState) => {
  let { usertoken: { token } } = getState();
  RestClient.post('login', params, token)
    .then(result => {
      if (result.status === 200) {
        cb({ status: true, message: result.data.message });
      } else {
        cb({ status: false, message: result.data.message });
      }
    })
    .catch(() => {
      cb({ status: false, message: MESSAGES.genericError });
    });
};