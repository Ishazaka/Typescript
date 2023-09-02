
 // core data types
// let y :number = 10;
// let x: string = 'hello';
// let isData: boolean = false;

// console.warn(x, y, isData);

// Number
// number supports (floating, decimals, hexa-decimals, binary)

let first:number = 10; //number
let second:number = 0x67CF ; // hexa-decimal
let  third:number = 0o455; //octal
let fourth: number = 0b110101; //binary


console.log(first)
console.log(second)
console.log(third)
console.log(fourth)


// Array (strings, numbers)

let names = ['johns' , 'apple' , 'orange']

// names.push(3)  //throw error
names.push('watermelon')


let nums = [23, 56, 98]
nums.push(93)


 let namesArr : string[] = ['data' , 'content' , 'books']
  namesArr.push('hello')

let numsArr : number[]
       numsArr = [34, 78, 90]
  numsArr.push(12)

//    Array of numbers and strings
 
 // let emptyArr : [] = [2, 'hello' ]   It will throw error, beucase the empty array means we can only assign empty array to the variable

 
 let stringOrNum : (string | number)[] =  ['hello' , 34, 12 ];

 let stringNumBool : (string | number | boolean)[] =  ['hello' , 34, 12, true ];

//  Objects
 // If you have given three variables with types, then you have to use exact three in the object
  
 let myEmployee : {
    name: string,
    email: string,
    phone :number,
  
 } 
 
 myEmployee  = {
    name: 'ali',
    email: 'ali@gmail.com',
    phone : 0935092,
 }

//  readonly means you can not change the value later, and ? means it is optional to assign value

  let myUsers :{ 
   readonly _id: number,
    name: string,
    email: string,
    phone?: number
   }

   myUsers = {
     _id: 124,
     name: 'hello',
     email: 'hel@gmail.com',     
   }
   

// Any Type

let valueAny;

 valueAny = 4;
valueAny = 'john'
valueAny = [], {}

let anyArr : any[] = ['helo' , 4 , [[3]], [true] , {name: 'hello'} ]  


//  Functions

  let multiple1 = (num1 : number) => {
   return num1 * 2
  }


  let multiple2 = (num1: number): number => {
    return num1 * 3
}

let multiple3 = (num1: number): void => {
    //  return num1 * '3'
    // do something but not return any value
    console.log('hello')
}

 let sum = (num1: number , num2: number , another?: number) => {
        return num1 + num2
  }
   
   sum(2, 3)


   let funcObj = (user: {username: string , address: string, age: number ,phone?: number}) => {
   console.log(user.username)
   }
  
 // TYPE ALIASES 
//   with type aliases, we can give a custom type rather than giving types one by one in parameters of function

 
// type aliases for object parameter in function 

type UerType = {
    username: string
    address: string
    phone: number
    age: number
  qualification?: string 
}


let funcobj2 = (user: UerType ) => {
    console.log(user.username)
}


//  function prototype
//  type aliases for function parameter
 type myFunc = (a:number, b:string) => void 

  
  let writi : myFunc = (num, str  ) => {
     console.log(num, 'times' , str )
  }

    
  // type aliases for objects
   
   type UserType2 = {
    name: string
    address: string
    isActive: boolean | string
    age : number 
    theme: 'dark' | 'light'

   }

    const employeUser : UserType2 = {
       name: 'ali',
       address: '1667',
       isActive: true,
       age : 25,
      theme: 'dark'
    }
  

    //  INTERFACES

 
   interface  IUser {
       username: string,
       email: string
       isActive: boolean | string
       phone: number  
     
   }

     interface IEmployee extends IUser{
        yearsExperience: number
     }

   const employe : IEmployee = {
    username: 'akash',
    email: 'akash@gmail.com',
    isActive: true,
    phone: +1234532556, 
    yearsExperience: 4 
   }

   const client : IUser = {
    username: 'ahmed',
    email: 'ahmed@gmail.com',
    isActive: true,
    phone: +1234532556, 

   }


    // GENERICS

    

   




export{}
