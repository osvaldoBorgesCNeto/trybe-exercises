export const HANDLECHANGE = "HANDLECHANGE";

const validateAddress = address => address.replace(/[^\w\s]/gi, '')

const changeHandler = event => {
  let { name, value } = event.target;

  if (name === 'name') value = value.toUpperCase();
  if (name === 'address') value = validateAddress(value);
  if (name === 'city') value = value.match(/^\d/) ? '' : value;

  return ({
    type: HANDLECHANGE,
    name,
    value,
  })
}


export default changeHandler;