export const USER_ACTION = "USER_ACTION"; 

const getUser = (user) => ({ type: USER_ACTION, user });

export function getThunkUser(fetchUser) {
  return async (dispatch) => {
    const result = await fetch(fetchUser);
    const object = await result.json();
    return dispatch(getUser(object));
  }
}

export const USERREPOS_ACTION = "USERREPOS_ACTION"; 

const getUserRepos = (userRepos) => ({ type: USERREPOS_ACTION, userRepos });

export function getThunkRepos(fetchUserRepos) {
  return async (dispatch) => {
    const result = await fetch(fetchUserRepos);
    const array = await result.json();
    return dispatch(getUserRepos(array));
  }
}