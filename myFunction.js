function addTwo(num) {
    return num + 5;
}
addTwo(13);
function typeFunc(str) {
    return str + 23;
}
var valu = typeFunc(123);
console.log(valu);
var arrFunc = function (s) {
    return "";
};
arrFunc('123');
// two types of return
// function twoTypes (s: string){
//     if(s == "true"){
//         return true;
//     }
//     return "succeed OK";
// }
// void means the function dont return anything
function consoleFunc(num) {
    console.log(num);
}
function errorHandler(str) {
    throw new Error(str);
}
