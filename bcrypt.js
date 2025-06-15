const bcrypt=require('bcrypt');

const password="Vamshi@1234"

let becryptedPassword=bcrypt.hashSync(password,10);
console.log(becryptedPassword);
let result=bcrypt.compareSync(password,becryptedPassword);
console.log(result);