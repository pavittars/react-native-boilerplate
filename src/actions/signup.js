import RestClient from '../config/RestClient';
import MESSAGES from '../constants/messages';

export const USER_STATUS = 'USER_STATUS';
export const USER_NAME = 'USER_NAME';
export const USER_PHONE_NUMBER = 'USER_PHONE_NUMBER';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_TOKEN = 'USER_TOKEN';

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

export const confirmVerificationCode = (params, cb) => {
  return dispatch => {
    RestClient.post('confirmOtp', params)
      .then(result => {
        if (result.status === 200) {
          cb({ status: true, message: result.message });
          dispatch(userToken(result.data.data));
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
  return dispatch => {
    RestClient.post('truelayerCode', params)
      .then(result => {
        if (result.status === 200) {
          cb({ status: true, message: result.message });
          dispatch(userToken(result.data.data));
        } else {
          cb({ status: false, message: result.data.message });
        }
      })
      .catch(() => {
        cb({ status: false, message: MESSAGES.genericError });
      });
  };
};