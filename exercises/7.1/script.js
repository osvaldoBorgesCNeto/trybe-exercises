const fatorial = num => {
  let result = 1;
  for (let index = 1; index <= num; index += 1) {
    result *= index;
  }
  return result
}

console.log(fatorial(4));