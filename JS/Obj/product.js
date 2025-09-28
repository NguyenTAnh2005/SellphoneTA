// Product.js
import Company from "./company.js";

export default class Product {
    #product_id;
    #product_name;
    #product_desc;
    #company; // object Company

    constructor(p_id, p_name, p_desc, company) {
        this.#product_id = p_id;
        this.#product_name = p_name;
        this.#product_desc = p_desc;
        this.#company = company;
    }

    get product_id() { return this.#product_id; }
    set product_id(value) { this.#product_id = value; }

    get product_name() { return this.#product_name; }
    set product_name(value) { this.#product_name = value; }

    get product_desc() { return this.#product_desc; }
    set product_desc(value) { this.#product_desc = value; }

    get company() { return this.#company; }
    set company(value) { this.#company = value; }
}
