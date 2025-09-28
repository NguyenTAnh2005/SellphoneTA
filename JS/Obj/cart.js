// Cart.js
import Account from "./account.js";
import Product from "./product.js";

export default class Cart {
    #account; // object Account
    #product; // object Product
    #cart_count;

    constructor(account, product, count) {
        this.#account = account;
        this.#product = product;
        this.#cart_count = count;
    }

    get account() { return this.#account; }
    set account(value) { this.#account = value; }

    get product() { return this.#product; }
    set product(value) { this.#product = value; }

    get cart_count() { return this.#cart_count; }
    set cart_count(value) { this.#cart_count = value; }
}
