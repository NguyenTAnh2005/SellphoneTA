export default class Company {
    #company_id;
    #company_name;
    #company_desc;
    // Khai bao dang private
    constructor(c_id, c_name, c_desc) {
        this.#company_id = c_id;
        this.#company_name = c_name;
        this.#company_desc = c_desc;
    }

    //GET & SET
    get company_id() { return this.#company_id; }
    set company_id(value) { this.#company_id = value; }

    get company_name() { return this.#company_name; }
    set company_name(value) { this.#company_name = value; }

    get company_desc() { return this.#company_desc; }
    set company_desc(value) { this.#company_desc = value; }
}
