export const USER_STATUS = 'USER_STATUS';

export const userstatus = (data) => {
    return {
        type: USER_STATUS,
        payload: data
      };
    }