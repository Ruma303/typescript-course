//% Nuovi tipi
//, any
// let notSure: any = 4;
// notSure = "Forse è meglio una stringa?";
// notSure = false;
// notSure.metodo();
//, unknown
// let notSure: unknown = 4;
// // notSure + 5;
// if (typeof notSure === "number") {
//     console.log(notSure + 5);
// } else if (typeof notSure === "string") {
//     console.log(notSure.toUpperCase());
// }
//, void e never
// function f1 () {
//     let a = 10;
// }
// function f2 (): never {
//     throw new Error('Errore');
// }
// function f3 (): never {
//     while (true) {
//         console.log('Ciao');
//     }
// }
// let f4 = f3();
//, Number
// let myNumber: number = 123_456_978;
//, Null e Undefined
// let n: null = null;
// let u: undefined = undefined;
// let num: number = 10;
// num = n; // ❌ Errore se `strictNullChecks` è attivo
// num = u; // ❌ Errore se `strictNullChecks` è attivo
// //# Uso con union
// let num: number | null | undefined = 10;
// num = null; // ✅ Valido
// num = undefined; // ✅ Valido
// //# Gestione null e undefined in strutture di controllo
// if (num !== null && num !== undefined) {
//   console.log(num * 2); // ✅ Ora è sicuro
// } else {
//   console.log("num è null o undefined");
// }
