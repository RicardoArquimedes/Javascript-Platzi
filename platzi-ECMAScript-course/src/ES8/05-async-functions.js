const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('async!'),
    2000)
    : reject(new Error('Error!'))
  })
}

const anotherFn = () => {
  const something =  fnAsync();
  console.log('El Something', something);
  console.log('Hello!')
}

console.log('Before');
anotherFn();
console.log('after');