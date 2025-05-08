function sum(a,b){
    return a + b
}
function sub(q,p){
    return q-p
}
// module.exports = sum // default export
// module.exports = sub
const PI = 3.14
// named export
module.exports = {
    substract: sub,
    addition :sum,
    pi: PI
}

export default sum;
export const age = 12;