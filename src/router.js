export class Test{
    a = 0;
    constructor(a){
        this.a = a
    }
    getA(){
        return `a:${this.a}`
    }
    setA(a){
        this.a = a
    }
}