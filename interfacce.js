//% Interfacce
/* interface Person {
    name: string;
    age: number;
    email?: string;
    greet(): void;
} */
var pizza1 = {
    size: 'Medium',
    toppings: ['Cheese', 'Pepperoni'],
    price: 15,
    notifyCustomer: function () {
        return console.log("Your ".concat(this.size, " pizza is ready!"));
    }
};
//, Estendere un'interfaccia
/* interface User {
    id: number;
    username: string;
    login(): void;
}

interface Admin extends User {
    adminLevel: number;
    createBackup(): void;
}

interface Member extends User {
    membershipTier: string;
    renewMembership(): void;
} */
//, Index signature
/* interface Person {
    [name: string]: string;
}

const person: Person = {
    name: 'John',
    age: '30',
    email: 'jhon@example.com'
};

interface ContactNumbers {
    [key: string]: number;
}

let contactNumbers: ContactNumbers = {
    phoneHome: 1234567890,
    phoneWork: 987654321
}; */
//# Definire più index signature
/* interface FlexibleData {
    [key: string]: string;
    [index: number]: string;
}

let data: FlexibleData = {
    10: "Dieci",
    20: "Venti",
    "nome": "Mario",
    "cognome": "Rossi"
}; */
//# Accedere ai valori di un'interfaccia
/* console.log(data.nome); // "Mario"
console.log(data[10]); // "Dieci"
console.log(data["cognome"]); // "Rossi" */
//, Combinare index signatures e proprietà esplicite
/* interface User {
    readonly [id: string]: string;
    username: string;
    password: string;
}

let user: User = {
    username: "alice123",
    password: "secret"
};

user.username = "bob123";  // Valid
user.password = "password";  // Valid

// Aggiungiamo dinamicamente altre proprietà
user['email'] = "alice@example.com";  // Valid ma readonly

// Tentativo di modifica di una proprietà readonly
user['email'] = "bob@example.com";  // Errore! La proprietà è readonly.

console.log(user.username);  // "bob123"
console.log(user['email']);  // "alice@example.com" */
//, Optional properties
/*  interface Student {
     //[key: string]: string | number | number[] | undefined;
     name: string;
     degree: number;
     email?: string;
     classes?: number[];
 }

 let student: Student = {
     name: 'Alice',
     degree: 90,
     email: 'alice.example.com',
     classes: [101, 102, 103]
 };
 console.log(student.email); // alice.example.com */
//# keyof assertion
/*  for (let key in student) {
     //console.log(key + ": " + student[key as keyof Student]);
     console.log(key + ": " + student[key as keyof typeof student]);
 } */ 
