let nome = "Daniele";

switch (nome) {
    case 'Daniele':
        console.log('O nome é Daniele');
        break;
    case 'Joaquin':
        console.log('O nome é Joaquin');
        break;
    default:
        console.log('Não é Daniele nem Joaquin');
        break;
}

// if economiza

if (nome == 'Daniele') {
    console.log('O nome é Daniele');
} else if (nome == 'Joaquin') {
    console.log('O nome é Joaquin');
}