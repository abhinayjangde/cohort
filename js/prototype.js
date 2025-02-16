class A{
    
    display(){
        console.log(`function`)
    }
}
class B extends A{
    
}

const p1 = new A()
p1.display()

const p2 = new B()
p2.display()