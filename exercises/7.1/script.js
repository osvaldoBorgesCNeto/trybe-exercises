function testingScope(escopo) {
  let ifScope
  if (escopo) { 
    ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // Se necessário esta linha pode ser removida.

  console.log(`${ifScope} o que estou fazendo aqui ? :O`); 
}

testingScope(false);