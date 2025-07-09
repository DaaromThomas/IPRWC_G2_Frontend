import { Product } from "./product";

export class ProductInShoppingCart{
    constructor(
        public id: string,
        public product: Product,
        public quantity: number
    ){}
}