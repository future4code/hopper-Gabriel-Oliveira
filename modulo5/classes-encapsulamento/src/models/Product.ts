// export type Product = {
//     id: string,
//     name: string,
//     price: number
// }

export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: string  
    ){
        this.id = id,
        this.name = name,
        this.price = price
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getPrice():any{
        return this.price
    }
        
}