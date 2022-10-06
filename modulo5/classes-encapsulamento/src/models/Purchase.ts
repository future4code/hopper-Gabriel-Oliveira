// // type para tipar no typescript com camelCase
// export type Purchase = {
//     id: string,
//     userId: string,
//     productId: string,
//     quantity: number,
//     totalPrice: number
// }

// // type para tipar no banco de dados com snake_case
// export type PurchaseDB = {
//     id: string,
//     user_id: string,
//     product_id: string,
//     quantity: number,
//     total_price: number
// }


export class Purchase {
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        private quantity: number,
        private totalPrice: number
    ){
        this.id = id,
        this.userId = userId,
        this.productId = productId,
        this.quantity = quantity,
        this.totalPrice = totalPrice
    }
}

export class PurchaseDB {
    constructor(
        private id: string,
        private user_id: string,
        private product_id: string,
        private quantity: number,
        private total_price: number
    ){
        this.id = id,
        this.user_id = user_id,
        this.product_id = product_id,
        this.quantity = quantity,
        this.total_price = total_price
    }
}