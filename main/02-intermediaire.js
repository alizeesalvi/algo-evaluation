/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2) {
    let Table = [];
    let k = 0;
    if (tableau1.length !== tableau2.length) return
    while (k < tableau1.length) {
        Table[k * 2] = tableau1[k];
        Table[k * 2 + 1] = tableau2[k];
        k++;
    }
    return Table;
}
let tableau1 = [1, 2, 3];
let tableau2 = ['orange', 'pomme', 'poire'];
console.log(combine(tableau1, tableau2));

/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
function rotate(tableau, offset) {
    let Table = [];
    let element = offset;
    let k = 0;
    while (k < tableau.length) {
        if (k + element >= tableau.length) element = -k;
        Table[k] = tableau[k + element];
        k++;
    }
    return Table
}
let tableauRotate = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotate(tableauRotate, 2));

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
function syracuse(nombre) {
    let nbre = nombre;
    let Table = [];
    let k = 1;
    Table[0] = nbre;
    while (k < 10) {
        if (nbre % 2 === 0) {
            nbre /= 2;
        } else {
            nbre = nbre * 3 + 1;
        }
        Table[k] = nbre;
        k++;
    }
    return Table;
}
let syracuseNbre = 14;
console.log(syracuse(syracuseNbre));