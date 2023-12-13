import { ADD_PROD, DELETE_PROD, EDIT_PROD, LOGIN, LOGOUT } from "./actionTypes";

export const userLogin = () => {
  return {
    type: LOGIN,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};

//------------------------------------------------------------

export const addProd = (newProd) => {
  return {
    type: ADD_PROD,
    payload: newProd,
  };
};

export const deleteProd = (TaskID) => {
  return {
    type: DELETE_PROD,
    payload: TaskID,
  };
};

export const editProd = (editedProd) => {
  return {
    type: EDIT_PROD,
    payload: editedProd,
  };
};
