const emailValidator = (email: string) => {
  return new Promise<string>((resolve, reject) => {
    if(!email) 
      reject("Email not provided.")

    email = email.toLowerCase();

    if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
      reject("Email address is not in a valid format");

    resolve(email);
  })
}

export default emailValidator;
