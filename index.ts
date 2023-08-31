let app = document.getElementById('app');

(function greet(type:string = "TypeScript") {
    let saluta = "Benvenuto al corso di: " + type + "!";
    console.log(saluta);
    if(app) {
        app.innerHTML = saluta;
    }
})();

