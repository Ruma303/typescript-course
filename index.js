//, Type annotation
function add(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
//, Parametri Default
function profile(name, age) {
    if (age === void 0) { age = 20; }
    return "Name: ".concat(name, ", Age: ").concat(age);
}
console.log(profile('Mario'));
// Name: Mario, Age: 20
//, Parametri opzionali
function sum(x, y) {
    return y ? x + y : x;
}
console.log(sum(10)); // 10
//, Rest Parameters
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, val) { return acc + val; }, 0);
}
sumAll(1, 2, 3, 4, 5); // 15
//* Implementazione della funzione che deve essere compatibile con tutte le firme
function getInfo(input, address) {
    if (typeof input === "number") {
        return "Fetching user data by ID: ".concat(input);
    }
    else if (typeof input === "string" && address) {
        return "Fetching user data by name: ".concat(input, ", address: ").concat(address);
    }
    else {
        return "Fetching user data by email: ".concat(input);
    }
}
//* Utilizzo degli overload
var infoById = getInfo(101); // Chiama la prima firma
var infoByEmail = getInfo("user@example.com"); // Chiama la seconda firma
var infoByNameAndAddress = getInfo("John Doe", "123 Main St"); // Chiama la terza firma
var somma = function (x, y) {
    return x + y;
};
var differenza = function (x, y) {
    return x - y;
};
console.log(somma(5, 3)); // 8
console.log(differenza(5, 3)); // 2
