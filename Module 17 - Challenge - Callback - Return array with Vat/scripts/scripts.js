/*Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.

Luego crea una function map() que tome dos entradas o parámetros:
un array de como valores números.

una función callback: esta función se aplica a cada elemento del array (dentro de la función map().

Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada.
*/

// --------Function gastosConIva()

const expensesWithVat = (num) => {
    const ADD_IVA = 1.21; // Constant
    let expensesWithVat = 0; // Output

    expensesWithVat = num * ADD_IVA;
    
    return expensesWithVat; // Output
} 


// -------- Function map()

const functionMap = (array, expensesWithVat) => array.map(expensesWithVat);


// console.log(functionMap([5,1,2,10,8], expensesWithVat));