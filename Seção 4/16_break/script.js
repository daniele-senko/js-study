let nome = "Daniele";

for (let i = 0; i < 10; i = i + 1) {


    if (i == 3) {
        nome = "Joaquin";
    }
    if (i == 5 && nome == "Joaquin") {
        console.log("O nome é Joaquin");
        break;
    }

    console.log(i);
}

// utiliza o break para parar o loop quando a condição é atingida
