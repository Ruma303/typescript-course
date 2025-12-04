(function greet() {
    let type = "Codice attivato da ts/type.ts";
    console.log(type);
    if(app) {
        app.innerHTML = type;
    }
})();