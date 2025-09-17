// VariantPhone.js
import Phone from "./phone.js";

export default class PhoneVar {
    #phone; // object Phone
    #variant_id;
    #variant_ph_ram;
    #variant_ph_rom;
    #variant_ph_color;
    #variant_ph_org_price;
    #variant_ph_new_price;

    constructor(phone, v_id, ram, rom, color, org_price, new_price) {
        this.#phone = phone;
        this.#variant_id = v_id;
        this.#variant_ph_ram = ram;
        this.#variant_ph_rom = rom;
        this.#variant_ph_color = color;
        this.#variant_ph_org_price = org_price;
        this.#variant_ph_new_price = new_price;
    }

    get phone() { return this.#phone; }
    set phone(value) { this.#phone = value; }

    get variant_id() { return this.#variant_id; }
    set variant_id(value) { this.#variant_id = value; }

    get variant_ph_ram() { return this.#variant_ph_ram; }
    set variant_ph_ram(value) { this.#variant_ph_ram = value; }

    get variant_ph_rom() { return this.#variant_ph_rom; }
    set variant_ph_rom(value) { this.#variant_ph_rom = value; }

    get variant_ph_color() { return this.#variant_ph_color; }
    set variant_ph_color(value) { this.#variant_ph_color = value; }

    get variant_ph_org_price() { return this.#variant_ph_org_price; }
    set variant_ph_org_price(value) { this.#variant_ph_org_price = value; }

    get variant_ph_new_price() { return this.#variant_ph_new_price; }
    set variant_ph_new_price(value) { this.#variant_ph_new_price = value; }
}
