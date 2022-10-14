const user = { username: 'gndx', edad: 32, country: 'CO' };
const { username, ...values } = user

console.log(username);
console.log(values);
console.log('-');
console.log(user);
