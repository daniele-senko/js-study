//uma funcionalidade que permite uma função chamar a si mesma
//isso pode ser um problema cas a função se chame muitas vezes
//código de exemplo

function retornarNumeroPar(n){
  if (n % 2 == 0){
    console.log("n agora é par: " + n)
  } else {
    console.log(n);
    retornarNumeroPar(n + 1);
  }
}

retornarNumeroPar(33);