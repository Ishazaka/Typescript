"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'zebra',
    email: 'zebra@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'zebra', isPaid: false };
createUser(newUser);
var myUser = {
    _id: 1234,
    name: 'hello',
    email: 'hello@gmail.com',
    isActive: true,
    creditCard: 2345543
};
myUser.email = 'hel@gmail.com';
