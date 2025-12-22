enum Role {
  ADMIN = 100,
  GUEST,
  USER = "Default user",
}

console.log(Role);

console.log(Role.ADMIN); // 100
console.log(Role.GUEST); // 101
console.log(Role.USER);  // "Default user"


enum User {
  name = "John".length,
  age = 25,
  isAdmin = 1,
}

console.log(User);

// Utilizzo enum

const enum GitRepoStatus {
  STASHED,
  UNSTAGED,
  STAGED,
  COMMITTED,
  PUSHED,
  DELETED,
  PULLED,
}

// Verifica come tipo per un parametro
function isRepoCommitted(repo: GitRepoStatus) : boolean {
  return repo !== null && repo === GitRepoStatus.COMMITTED;
}

let gitCommit = isRepoCommitted(GitRepoStatus.COMMITTED);
console.log(gitCommit);

// Controllo dei tipi
enum Stato {
  ATTIVO = "ATTIVO",
  INATTIVO = "INATTIVO"
}

type StatoTipo = keyof typeof Stato; // "ATTIVO" | "INATTIVO"
type StatoValore = typeof Stato[keyof typeof Stato]; // "ATTIVO" | "INATTIVO"

const stato: StatoTipo = "ATTIVO";
const valore: StatoValore = Stato.ATTIVO;
console.log(valore); // ATTIVO


// Computed enums
enum StatoHTTP {
  OK = 200,
  REDIRECT = 300 + 1,
  CLIENT_ERROR = Math.floor(400), // computed
  SERVER_ERROR = "ERROR".length + 499 // computed
}

// Alternativa moderna: oggetti come enum
const OrderStatus = {
  IN_ATTESA: "IN_ATTESA",
  COMPLETATO: "COMPLETATO",
  FALLITO: "FALLITO"
};



// as const
const StatoOrdine = {
  IN_ATTESA: "IN_ATTESA",
  COMPLETATO: "COMPLETATO",
  FALLITO: "FALLITO"
} as const;

type StatoOrdine = typeof StatoOrdine[keyof typeof StatoOrdine];

function aggiornaStato(stato: StatoOrdine) {
  console.log(`Stato aggiornato: ${stato}`);
}

aggiornaStato(StatoOrdine.COMPLETATO); // OK
