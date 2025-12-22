//, Type Narrowing e type guards
/* type Item = { prop: string; };

function itemOrItems(name: Item | Item[]) { // oggetto o array
    if (Array.isArray(name)) {
        return name.length;
    } else {
        return name.prop;
    }
}

let obj = { prop: "Prop1" };
let arr = [{ prop: "Prop1" }, { prop: "Prop2" }];

console.log(itemOrItems(obj)); // Prop1
console.log(itemOrItems(arr)); // 2 */
// # Type Narrowing con typeof
/* function processInput(input: string | number) {
    if (typeof input === "string") {
        return input.toUpperCase(); // Qui input è string
    } else {
        return input * 2; // Qui input è number
    }
}

console.log(processInput("hello")); // "HELLO" */
// # Type Narrowing con instanceof
/* class Dog {
    bark() {
        return "Woof!";
    }
}

class Cat {
    meow() {
        return "Meow!";
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        return animal.bark();
    } else {
        return animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();
console.log(makeSound(dog)); // "Woof!"
console.log(makeSound(cat)); // "Meow!" */
// # Type Narrowing con in
/* type Car = { wheels: number };
type Boat = { sails: number };

function describeVehicle(vehicle: Car | Boat) {
    if ("wheels" in vehicle) {
        return `Auto con ${vehicle.wheels} ruote`;
    } else {
        return `Barca con ${vehicle.sails} vele`;
    }
}

const car: Car = { wheels: 4 };
const boat: Boat = { sails: 2 };
console.log(describeVehicle(car)); // "Auto con 4 ruote"
console.log(describeVehicle(boat)); // "Barca con 2 vele" */
// # Type Narrowing con user-defined type guard
/* let someValue: string = "Hello World";

function isString(value: string) {
    // user-defined type guard
    if (value === "Hello World") {
        return true;
    }
}
console.log(isString(someValue)); // true */
//, Object Narrowing
/* type Book = {
    title: string;
    pages: number;
    author: string;
    ISBN: string;
};

type BookName = { title: string };

let book1: Book = {
    title: "Il Signore degli Anelli",
    pages: 1000,
    author: "J.R.R. Tolkien",
    ISBN: "978-88-04-12345-6",
};

let book2: BookName = book1; // Object Narrowing
console.log(book2.title); // ✅ Accesso consentito
console.log(book2.pages); // ❌ Errore: Property 'pages' does not exist */
//, Type Widening
/* type Course = {
    name: string;
    duration: number;
};

let course = {
    name: "TypeScript",
    duration: 10
} as Course;

function courseName(course: Course) {
    return course.name;
}

console.log(courseName(course));  // TypeScript */
//, Refinement
/* class Dog {
    kind: "dog" = "dog"; // Proprietà discriminante
    bark() {
        return "Woof!";
    }
}

class Cat {
    kind: "cat" = "cat"; // Proprietà discriminante
    meow() {
        return "Meow!";
    }
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return animal.kind === "dog"; // Refinement basato sulla proprietà discriminante
}

function makeSound(animal: Animal): string {
    if (isDog(animal)) {
        return animal.bark();
    } else {
        return animal.meow();
    }
}

const dog = new Dog();
console.log(makeSound(dog)); // "Woof!" */
//, Type assignment
/* let a: number = 1;
let b: string = 'Hello';
let c: boolean[] = [true, false, true]; */
//, Type inference
/* let a = 1;
//a = 'Hello'; // Error: Type 'string' is not assignable to type 'number'.
// a = 2.3456;
let b = 'Hello';
let c = [true, false, true]; */
//, Union types
/* let d: number | string = 1;
d = 'Hello'; */
//, Type literal
/* let vero: true = true;
let nome: "Ruma" = "Ruma";
const falso = false; */
//, Type alias
/* type Nome = string;
type Eta = number;
type CodiceFiscale = string | number;

let nomeCompleto: Nome = "Mario Rossi";
let ata: Eta = 42;
let codiceFiscale: CodiceFiscale = "RSSMRA42A01XXXXXX"; */
//, Tipi come insiemi
/* let obj1 = { name: "Ruma", age: 29 };
let obj2 = { name: "Mario", age: 35, job: "Developer" };

obj1 = obj2; // obj2 è visto come un super insieme di obj1
obj2 = obj1; // obj1 non ha lo stesso insieme di tipi di obj2 */
//, Intersection types
/* type Person = { name: string; age: number; };
type Employee = { job: string; salary: number; };

type Developer = Person & Employee;
type Baker = Person | Employee;

let ruma: Developer = { name: "Ruma", age: 29, job: "Developer", salary: 1500 };
let john: Baker = { job: "Baker", salary: 1200 }; */
/* type numOrStr = number | string;
type numAndStr = string & boolean;

let a: numOrStr = 1;
let b: numOrStr = "Hello";

let c: numAndStr = "Hello"; */
//, Type assertion
//let someValue: any = "Questa è una stringa molto lunga";
//let strLength: number = (someValue as string).length;
//console.log("Lunghezza stringa: ", strLength);
//let strLength: number = (<string>someValue).length;
//# Specificità dei dati di ritorno
/* type onlyString = string;
type stringOrNumber = string | number;
type World = "world";

let a: onlyString = "hello"; // Più specifico
let b = "world" as stringOrNumber; // Meno specifico
let c = "world" as World; // Ancora più Specifico */
/* const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

//! Il compilatore ignorerà il tipo, ma il risultato sarà un errore in quanto la funzione restituirà una stringa
let first: string = addOrConcat(5, 10, 'add') as string;
let second: number = addOrConcat(5, 10, 'concat') as number;

console.log(typeof first); // number
console.log(typeof second); // string */
//# Cambiare un tipo literal
// 10 as string; // Error
// (10 as unknown) as string;
//# DOM
/* const img = document.querySelector('img')!;
img.src */
