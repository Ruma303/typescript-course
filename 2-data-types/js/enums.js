var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["GUEST"] = 101] = "GUEST";
    Role["USER"] = "Default user";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.ADMIN); // 100
console.log(Role.GUEST); // 101
console.log(Role.USER); // "Default user"
var User;
(function (User) {
    User[User["name"] = "John".length] = "name";
    User[User["age"] = 25] = "age";
    User[User["isAdmin"] = 1] = "isAdmin";
})(User || (User = {}));
console.log(User);
// Verifica come tipo per un parametro
function isRepoCommitted(repo) {
    return repo !== null && repo === 3 /* GitRepoStatus.COMMITTED */;
}
var gitCommit = isRepoCommitted(3 /* GitRepoStatus.COMMITTED */);
console.log(gitCommit);
// Controllo dei tipi
var Stato;
(function (Stato) {
    Stato["ATTIVO"] = "ATTIVO";
    Stato["INATTIVO"] = "INATTIVO";
})(Stato || (Stato = {}));
var stato = "ATTIVO";
var valore = Stato.ATTIVO;
console.log(valore); // ATTIVO
// Computed enums
var StatoHTTP;
(function (StatoHTTP) {
    StatoHTTP[StatoHTTP["OK"] = 200] = "OK";
    StatoHTTP[StatoHTTP["REDIRECT"] = 301] = "REDIRECT";
    StatoHTTP[StatoHTTP["CLIENT_ERROR"] = Math.floor(400)] = "CLIENT_ERROR";
    StatoHTTP[StatoHTTP["SERVER_ERROR"] = "ERROR".length + 499] = "SERVER_ERROR"; // computed
})(StatoHTTP || (StatoHTTP = {}));
// Alternativa moderna: oggetti come enum
var OrderStatus = {
    IN_ATTESA: "IN_ATTESA",
    COMPLETATO: "COMPLETATO",
    FALLITO: "FALLITO"
};
// as const
var StatoOrdine = {
    IN_ATTESA: "IN_ATTESA",
    COMPLETATO: "COMPLETATO",
    FALLITO: "FALLITO"
};
function aggiornaStato(stato) {
    console.log("Stato aggiornato: ".concat(stato));
}
aggiornaStato(StatoOrdine.COMPLETATO); // OK
