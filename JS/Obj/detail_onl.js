import OrderOnl from "./order_onl.js";
import VariantPhone from "./phone_var.js";

export default class DetailOnl {
    #order;              // object OrderOnl
    #variant;            // object VariantPhone
    #detail_count;       // số lượng SP trong đơn
    #detail_unit_price;  // giá của 1 SP (snapshot tại thời điểm đặt hàng)
    #detail_total_price; // thành tiền (unit_price * count)

    constructor(order, variant, count, unit_price) {
        this.#order = order;
        this.#variant = variant;
        this.#detail_count = count;
        this.#detail_unit_price = unit_price;
        this.#detail_total_price = unit_price * count;
    }

    // GET & SET
    get order() { return this.#order; }
    set order(value) { this.#order = value; }

    get variant() { return this.#variant; }
    set variant(value) { this.#variant = value; }

    get detail_count() { return this.#detail_count; }
    set detail_count(value) {
        this.#detail_count = value;
        this.#detail_total_price = this.#detail_unit_price * value; // update total
    }

    get detail_unit_price() { return this.#detail_unit_price; }
    set detail_unit_price(value) {
        this.#detail_unit_price = value;
        this.#detail_total_price = value * this.#detail_count; // update total
    }

    get detail_total_price() { return this.#detail_total_price; }
}
