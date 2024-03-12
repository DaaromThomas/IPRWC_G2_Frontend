import { ProductInShoppingCart } from "./ProductInShoppingCart";
import { Product } from "./product";

export class Order{
    private name_: string;
    private customer_: string;
    private products_: ProductInShoppingCart[];
    private email_: string;
    private address_: string;

    constructor(name: string, customer: string, products: ProductInShoppingCart[], email: string, address: string){
        this.name_ = name;
        this.customer_ = customer;
        this.products_ = products;
        this.email_ = email;
        this.address_ = address;
    }

    public get name(){
        return this.name_;
    }

    public set name(name: string){
        this.name_ = name;
    }

    public get customer(){
        return this.customer_;
    }

    public set customer(customer: string){
        this.customer_ = customer;
    }

    public get products(){
        return this.products_;
    }

    public set products(products: ProductInShoppingCart[]){
        this.products_ = products;
    }

    public get email(){
        return this.email_;
    }

    public set email(email: string){
        this.email_ = email;
    }

    public get address(){
        return this.address_;
    }

    public set address(address: string){
        this.address_ = address
    }

}