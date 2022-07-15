const maxUsernameLength = 30;
const minUsernameLength = 1;

const usernameValidator = (username: string) => {
  return new Promise<string>((resolve, reject) => {
    if(!username)
      reject("Username not provided.")

    username = username.toLowerCase();

    if(username.length < minUsernameLength)
      reject(`Username must have at least ${minUsernameLength} characters.`)

    if(username.length > maxUsernameLength)
      reject(`Username can't be longer than ${maxUsernameLength} characters.`)

    if(/\s/g.test(username))
      reject("Username can't contain whitespace.")

    if((/[^0-9a-zA-Z$_.!]/).test(username))
      reject("Username contains unauthorized character.")

    resolve(username);
  })
}

export default usernameValidator;
