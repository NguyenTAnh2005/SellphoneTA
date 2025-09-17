// Hotline.js
import Account from "./account.js";

export default class Hotline {
    #account; // object Account
    #hotline_id;
    #hotline_phonenumber;
    #hotline_province;
    #hotline_district;
    #hotline_commune;
    #hotline_other;

    constructor(account, id, phone, province, district, commune, other) {
        this.#account = account;
        this.#hotline_id = id;
        this.#hotline_phonenumber = phone;
        this.#hotline_province = province;
        this.#hotline_district = district;
        this.#hotline_commune = commune;
        this.#hotline_other = other;
    }

    get account() { return this.#account; }
    set account(value) { this.#account = value; }

    get hotline_id() { return this.#hotline_id; }
    set hotline_id(value) { this.#hotline_id = value; }

    get hotline_phonenumber() { return this.#hotline_phonenumber; }
    set hotline_phonenumber(value) { this.#hotline_phonenumber = value; }

    get hotline_province() { return this.#hotline_province; }
    set hotline_province(value) { this.#hotline_province = value; }

    get hotline_district() { return this.#hotline_district; }
    set hotline_district(value) { this.#hotline_district = value; }

    get hotline_commune() { return this.#hotline_commune; }
    set hotline_commune(value) { this.#hotline_commune = value; }

    get hotline_other() { return this.#hotline_other; }
    set hotline_other(value) { this.#hotline_other = value; }
}
