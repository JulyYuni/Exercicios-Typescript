let total = 100;

function adicionar(a = 0, b = 0) {
    total = a + b;
    return total;
}

let resultado = adicionar(20, 30);

console.log(resultado); // 50