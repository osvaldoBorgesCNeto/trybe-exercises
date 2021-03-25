export const FORMERROR_ACTION = "FORMERROR_ACTION";

const formErrorAction = (event) => {
  let { name, value } = event.target;

  const returnValid = ({
    type: FORMERROR_ACTION,
    formError: { [name]: ' ok' }
  })

  const returnInvalid = ({
    type: FORMERROR_ACTION,
    formError: { [name]: ' is invalid' }
  })

  switch (name) {
    case 'email':
      const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
      return isValid ? returnValid : returnInvalid;
    default:
      return returnValid;
  }  
}

export default formErrorAction;
