let user = {
    id:1
}
// console.log(user.hasOwnProperty("id"))
const obj = Object.create(null);
obj.name = "Abhi"
obj.age = 22
obj.hasOwnProperty = Object.prototype.hasOwnProperty
console.log(obj.hasOwnProperty("age"))
console.log(obj)

