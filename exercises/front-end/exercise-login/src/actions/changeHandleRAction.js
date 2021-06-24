export const CHANGEHANDLE_R_ACTION = 'CHANGEHANDLE_R_ACTION';

export const changeHandleRAction = (event) => {
  const { name, value } = event.target;
  
  return ({ 
  type: CHANGEHANDLE_R_ACTION,
  name,
  value,
  })
};