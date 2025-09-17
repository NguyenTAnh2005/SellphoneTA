import Account from "./account.js";
import VariantPhone from "./phone_var.js";

export default class Cart {
    #account;      // object Account
    #variant;      // object VariantPhone
    #cart_count;   // số lượng ton kho

    constructor(account, variant, count) {
        this.#account = account;
        this.#variant = variant;
        this.#cart_count = count;
    }

    // GET & SET
    get account() { return this.#account; }
    set account(value) { this.#account = value; }

    get variant() { return this.#variant; }
    set variant(value) { this.#variant = value; }

    get cart_count() { return this.#cart_count; }
    set cart_count(value) { this.#cart_count = value; }
}
