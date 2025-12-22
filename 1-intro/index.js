var app = document.getElementById('app');
(function greet(type) {
    if (type === void 0) { type = "TypeScript"; }
    var saluta = "Benvenuto al corso di: " + type + "!";
    console.log(saluta);
    if (app) {
        app.innerHTML = saluta;
    }
})();
