var total = 100;
function adicionar(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    total = a + b;
    return total;
}
var resultado = adicionar(20, 30);
console.log(resultado); // 50
