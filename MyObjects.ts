
 const User = {
    name: 'zebra',
    email: 'zebra@gmail.com',
    isActive: true
 }


function  createUser({name: string, isPaid: boolean}){
 
}

 let newUser = {name: 'zebra' , isPaid: false}

createUser(newUser)


type User = {
  readonly  _id : number,
    name: string,
    email: string,
    isActive: boolean,
    creditCard?: number
}

 const myUser: User ={
    _id : 1234,
    name : 'hello',
    email: 'hello@gmail.com',
    isActive: true, 
    creditCard: 2345543
 }

 myUser.email = 'hel@gmail.com'
 // myUser._id = 345    (it will throw error because it is readonly we can not change it)





 


export{}
