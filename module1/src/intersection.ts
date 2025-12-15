type Admin = {
    adminLevel : string
}
type User = {
    name : string
    email : string
}
type AdminUser = Admin & User

const describeAdmin = (user : AdminUser): string =>{
    return `Name : ${user.name}, Email : ${user.email}, Admin Level : ${user.adminLevel}`
}

const user = describeAdmin({
    name: 'John',
    email: 'j@j.com',
    adminLevel: "super"
   
})

console.log(user);