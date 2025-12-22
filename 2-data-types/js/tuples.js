//% Tuple
//, # Definizione di una Tupla
// let t1: [number, string] = [1, 'Hello'];
//# Errori tipici
// let t2: [number, string, boolean] = [1, "Hello", {}]; // ❌ Errore: `{}` non è un booleanlet t3: [number, string, boolean, object, number] = [1];
// let t3: [number, string, boolean, object, number] = [1]; // ❌ Errore: mancano elementi
//# Uso di Union e Intersection Types
// let t4: [ number & any, boolean | undefined, string? ] = [10, true];
// let t5: [number, string, ...boolean[]] = [1, 'Hello', true, false, true];
//# Alias di Tipo con Tuple
// type Point = [number, number];
// const center: Point = [0, 0];
// const point: Point = [10, 20];
//, Tuple e rest operator
// let t5: [number, string, ...boolean[]] = [1, "Hello", true, false, true];
// let arr: [number, string, ...(boolean | null)[]];
// arr = [42, 'hello']; // OK, nessun elemento extra
// arr = [42, 'hello', true, false, null, true]; // OK
// arr = [42, 'hello', 5]; // Errore: il terzo elemento deve essere boolean o null
// arr = ['ciao', 'hello', true]; // Errore: il primo deve essere number
// let t6: [number, string, ...boolean[]] = [1, "Hello"];
//, Tuple Readonly
//let a: readonly [number, string] = [1, 'Hello'];
//a.pop(3)
//let b: Readonly<[number, string]> = [1, 'Hello'];
//b.push(true);
//, Pattern matching con Destrutturazione
// let user: [number, string] = [42, "Alice"];
// let [id, first_name] = user; // id = 42, name = "Alice"
// let [magic_number, _] = user; // `_` indica che non ci interessa il secondo valore
//, Tuple in funzioni
// function getData(): [number, string] {
//   return [1, "Data"];
// }
// const [id, data] = getData(); // id = 1, data = "Data"
