export const HANDLECHANGE_ACTION = "HANDLECHANGE";

const validateAddress = address => address.replace(/[^\w\s]/gi, '')

const changeHandler = event => {
  let { name, value } = event.target;

  if (name === 'name') value = value.toUpperCase();
  if (name === 'address') value = validateAddress(value);
  if (name === 'city') value = value.match(/^\d/) ? '' : value;

  return ({
    type: HANDLECHANGE_ACTION,
    name,
    value,
  })
}


export default changeHandler;