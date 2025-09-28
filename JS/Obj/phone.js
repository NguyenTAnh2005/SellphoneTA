// Phone.js
import Product from "./product.js";

export default class Phone {
    #product; // object Product
    #phone_chip;
    #phone_screen_size;
    #phone_front_cam;
    #phone_behind_cam;
    #phone_battery;
    #phone_system;
    #phone_charging_port;
    #phone_sim_card;
    #phone_nfc;
    #phone_ear_phone;
    #phone_memory_card;
    #phone_desc;

    constructor(product, chip, screen, front, behind, battery, system, port, sim, nfc, ear, memory, desc) {
        this.#product = product;
        this.#phone_chip = chip;
        this.#phone_screen_size = screen;
        this.#phone_front_cam = front;
        this.#phone_behind_cam = behind;
        this.#phone_battery = battery;
        this.#phone_system = system;
        this.#phone_charging_port = port;
        this.#phone_sim_card = sim;
        this.#phone_nfc = nfc;
        this.#phone_ear_phone = ear;
        this.#phone_memory_card = memory;
        this.#phone_desc = desc;
    }

    get product() { return this.#product; }
    set product(value) { this.#product = value; }

    get phone_chip() { return this.#phone_chip; }
    set phone_chip(value) { this.#phone_chip = value; }

    get phone_screen_size() { return this.#phone_screen_size; }
    set phone_screen_size(value) { this.#phone_screen_size = value; }

    get phone_front_cam() { return this.#phone_front_cam; }
    set phone_front_cam(value) { this.#phone_front_cam = value; }

    get phone_behind_cam() { return this.#phone_behind_cam; }
    set phone_behind_cam(value) { this.#phone_behind_cam = value; }

    get phone_battery() { return this.#phone_battery; }
    set phone_battery(value) { this.#phone_battery = value; }

    get phone_system() { return this.#phone_system; }
    set phone_system(value) { this.#phone_system = value; }

    get phone_charging_port() { return this.#phone_charging_port; }
    set phone_charging_port(value) { this.#phone_charging_port = value; }

    get phone_sim_card() { return this.#phone_sim_card; }
    set phone_sim_card(value) { this.#phone_sim_card = value; }

    get phone_nfc() { return this.#phone_nfc; }
    set phone_nfc(value) { this.#phone_nfc = value; }

    get phone_ear_phone() { return this.#phone_ear_phone; }
    set phone_ear_phone(value) { this.#phone_ear_phone = value; }

    get phone_memory_card() { return this.#phone_memory_card; }
    set phone_memory_card(value) { this.#phone_memory_card = value; }

    get phone_desc() { return this.#phone_desc; }
    set phone_desc(value) { this.#phone_desc = value; }
}
