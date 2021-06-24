export const CHANGEHANDLE_ACTION = 'CHANGEHANDLE_ACTION';

export const changeHandleAction = (event) => {
  const { name, value } = event.target;
  
  return ({ 
  type: CHANGEHANDLE_ACTION,
  name,
  value,
  })
};