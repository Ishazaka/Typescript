
function addTwo (num : number){
   return num + 5;

     
}

addTwo(13)

function typeFunc(str: number):number {
    return   str + 23
}

const valu = typeFunc(123)

console.log(valu)


const arrFunc = (s: string):string =>{
   return ""
}
  arrFunc('123')

   // two types of return
// function twoTypes (s: string){
//     if(s == "true"){
//         return true;
//     }
//     return "succeed OK";
// }
  
// void means the function dont return anything
function consoleFunc (num: number): void  {
    console.log(num)
}


function errorHandler(str: string):never {
   throw new Error (str);
}

