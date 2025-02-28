function pataNhi(fn, delay){
    // console.log(arguments)
    let myId;
    return function(){
        myId = setTimeout(()=>{

        }, delay)
    }
}

const f1 = pataNhi("Abhi",12)
console.log(f1())
