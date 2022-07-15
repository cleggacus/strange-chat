const maxPasswordLength = 100;
const minPasswordLength = 8;

const passwordValidator = (password: string) => {
  return new Promise<string>((resolve, reject) => {
    if(!password)
      reject("Password not provided.")

    if(password.length > maxPasswordLength)
      reject(`Password can't be longer than ${maxPasswordLength} character.`);

    if(password.length < minPasswordLength)
      reject(`Password must have at least ${minPasswordLength} character.`);

    if(!/[0-9@$!%*?&]/.test(password))
      reject(`Password must contain a number or special character.`)

    if(!/[a-z]/.test(password))
      reject(`Password must contain lowercase character.`)

    if(!/[A-Z]/.test(password))
      reject(`Password must contain upper character.`)

    resolve(password)
  })
}

export default passwordValidator;
