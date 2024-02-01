// fara uma ação, até que a condição seja atingida, ou seja, quando tem um valor definido e atinge esse valor
// exemplo
let x = 10; // essa é a condição

while (x > 0) {
    console.log("O x é " + x);
    x = x - 1;
}

let y = 0;

while (y <= 10) {
    console.log(y);
    y = y + 1;
} 

// loop infinito
let z = 10;

while (z > 0) { 
    console.log(z);
}