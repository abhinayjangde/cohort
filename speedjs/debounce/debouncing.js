// debouncing
function debounce(fn, delay){
    let id
    return function(){
        clearTimeout(id)
        id = setTimeout(function(...args){
            fn.apply(this,args)
        }, delay)
    }
}

const button = document.getElementById("sayHello")
button.addEventListener("click", debounce(function(){
    document.querySelector("#msg").textContent = "Hello Abhi"
    console.log("Hello, Abhi")
},4000))

