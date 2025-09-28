// Account.js
export default class Account {
    #account_id;
    #account_first_name;
    #account_last_name;
    #account_email;
    #account_gender;
    #account_date;
    #account_password;
    #account_access;

    constructor(id, first, last, email, gender, date, password, access) {
        this.#account_id = id;
        this.#account_first_name = first;
        this.#account_last_name = last;
        this.#account_email = email;
        this.#account_gender = gender;
        this.#account_date = date;
        this.#account_password = password;
        this.#account_access = access;
    }

    get account_id() { return this.#account_id; }
    set account_id(value) { this.#account_id = value; }

    get account_first_name() { return this.#account_first_name; }
    set account_first_name(value) { this.#account_first_name = value; }

    get account_last_name() { return this.#account_last_name; }
    set account_last_name(value) { this.#account_last_name = value; }

    get account_email() { return this.#account_email; }
    set account_email(value) { this.#account_email = value; }

    get account_gender() { return this.#account_gender; }
    set account_gender(value) { this.#account_gender = value; }

    get account_date() { return this.#account_date; }
    set account_date(value) { this.#account_date = value; }

    get account_password() { return this.#account_password; }
    set account_password(value) { this.#account_password = value; }

    get account_access() { return this.#account_access; }
    set account_access(value) { this.#account_access = value; }
}
