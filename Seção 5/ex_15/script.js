let num = 17;
let divisors = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        divisors++;
    }
}

if (divisors == 2) {
    console.log(`O número ${num} é primo`);
} else {
    console.log(`O número ${num} não é primo`);
}