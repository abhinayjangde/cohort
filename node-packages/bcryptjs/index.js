import bcrypt from "bcryptjs"

const salt = bcrypt.genSaltSync(10)
// console.log(salt)
const hashedPassword = bcrypt.hashSync("12345678", salt)

console.log("hashedPassword", hashedPassword)


console.log(bcrypt.compareSync("12345618", hashedPassword))



