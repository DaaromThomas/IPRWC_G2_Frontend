import { Product } from "./product";

export class ProductInShoppingCart{
    constructor(
        public product: Product,
        public quantity: number
    ){}
}