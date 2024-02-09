let CNH = false;
let idade = 16;

if (idade >= 18 && CNH === true) {
    console.log("Pode dirigir");
} else if (idade >= 18 && CNH === false) {
    console.log("Não pode dirigir, mas pode fazer CNH");
} else {
    console.log("Não pode dirigir");
}