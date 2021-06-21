function exercise01(param1, param2, param3) {
  const calculo = new Promise((resolve, reject) => {
    const paramType = [param1, param2, param3].map((type) => typeof(type));
    
    paramType.forEach((param) => {
      if (param != "number") reject(new Error("Informe apenas números"));
    });

    const resultado = ((param1 + param2) * param3);

    if (resultado < 50) reject(new Error("Valor muito baixo"));

    resolve(resultado);
  })
  return calculo;
};

function getRandomNumber() {
  return (Math.floor(Math.random() * 100 + 1));
};

const arrayNumbers = Array.from({ length: 3 }).map((number) => number = getRandomNumber())
console.log(arrayNumbers);

async function tryCatch() {  
  try {
    const resultado = await exercise01(...arrayNumbers);
    console.log(`Resultado: ${resultado}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

tryCatch();
