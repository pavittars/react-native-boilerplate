export const USER_STATUS = 'USER_STATUS';
export const USER_NAME = 'USER_NAME';
export const USER_PHONE_NUMBER = 'USER_PHONE_NUMBER';
export const USER_SIGNUP = 'USER_SIGNUP';

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

export const userSignup = (params, cb) => {
  return dispatch => {
    RestClient.post('smsAuth', params)
      .then(result => {
        if (result.status === 200) {
          cb({ status: true, message });
          // dispatch({});
        } else {
          cb({ status: false });
        }
      })
      .catch(() => {
        cb({ status: false });
      });
  };
};