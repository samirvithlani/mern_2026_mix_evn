var x = [10,20,30,40]

var x1 = x.map((elm)=>{
    return elm+10
})
console.log(x1)

var users =[{id:1,name:"amit"},{id:2,name:"sumit"}]

var users2 = users.map((user)=>{
    //return user
    return {id:user.id,name:user.name.toUpperCase()}
})
console.log(users2)