// OrderOnl.js
import Account from "./account.js";
import Hotline from "./hotline.js";

export default class OrderOnl {
    #account; // object Account
    #hotline; // object Hotline
    #order_onl_id;
    #order_onl_buy_time;
    #order_onl_rec_time;
    #order_onl_type_pay;
    #order_onl_state;
    #order_total_price;

    constructor(account, hotline, id, buy_time, rec_time, type_pay, state, total) {
        this.#account = account;
        this.#hotline = hotline;
        this.#order_onl_id = id;
        this.#order_onl_buy_time = buy_time;
        this.#order_onl_rec_time = rec_time;
        this.#order_onl_type_pay = type_pay;
        this.#order_onl_state = state;
        this.#order_total_price = total;
    }

    get account() { return this.#account; }
    set account(value) { this.#account = value; }

    get hotline() { return this.#hotline; }
    set hotline(value) { this.#hotline = value; }

    get order_onl_id() { return this.#order_onl_id; }
    set order_onl_id(value) { this.#order_onl_id = value; }

    get order_onl_buy_time() { return this.#order_onl_buy_time; }
    set order_onl_buy_time(value) { this.#order_onl_buy_time = value; }

    get order_onl_rec_time() { return this.#order_onl_rec_time; }
    set order_onl_rec_time(value) { this.#order_onl_rec_time = value; }

    get order_onl_type_pay() { return this.#order_onl_type_pay; }
    set order_onl_type_pay(value) { this.#order_onl_type_pay = value; }

    get order_onl_state() { return this.#order_onl_state; }
    set order_onl_state(value) { this.#order_onl_state = value; }

    get order_total_price() { return this.#order_total_price; }
    set order_total_price(value) { this.#order_total_price = value; }
}
