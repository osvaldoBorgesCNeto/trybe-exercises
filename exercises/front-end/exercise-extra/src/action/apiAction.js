export const GETAPI_ACTION = "GETAPI_ACTION"; 

export const getThunkApi = (result) => ({ type: GETAPI_ACTION, result });

export function getThunkApi02(name) {
  if(name.length === 0) {
    return;
  }
  return async (dispatch) => {
    const result = await fetch(`https://api.github.com/search/users?q=${name}+in:login&per_page=5`);
    const array = await result.json();
    return dispatch(getThunkApi(array));
  }
}
