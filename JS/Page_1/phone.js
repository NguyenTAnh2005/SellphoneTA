// HAM LOAD HEADER 
import { loadHeaderFooter } from "../helper_function_all.js"
loadHeaderFooter("./");
// THEM CAC LOGO CHO PHONE
const grp_logo = ["iphone", "samsung", "oppo", "realme", "vivo", "xiaomi", "honor", "nubia"];
grp_logo.forEach(hang => {
    document.getElementById("phone_logo_group").innerHTML += `
                    <img src="Images/Manufacturer/${hang}_logo.png" width="100"
                    class="btn border-1 rounded-3 border-secondary">
`
});

//tai ds dt len demo 
import { addProductToList } from "../helper_function_all.js";
const arr_phone = [
    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"],
    ["pdt7", "Redmi Note 13 Pro", "11.990", "6.595", "60%"],
    ["pdt8", "Ak Blue Dragon Lv7", "15.990", "9.594", "40%"],
    ["pdt9", "Mp40 Death Lightning", "13.590", "7.475", "45%"],
    ["pdt4", "Gay Phone 1", "13.590", "7.475", "45%"],
    ["pdt5", "Gay Phone 2", "13.590", "7.475", "45%"],
    ["pdt6", "FreeFire is number one", "13.590", "7.475", "45%"],
    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"],
    ["pdt7", "Redmi Note 13 Pro", "11.990", "6.595", "60%"],
    ["pdt8", "Ak Blue Dragon Lv7", "15.990", "9.594", "40%"],
    ["pdt9", "Mp40 Death Lightning", "13.590", "7.475", "45%"],
    ["pdt4", "Gay Phone 1", "13.590", "7.475", "45%"],
    ["pdt5", "Gay Phone 2", "13.590", "7.475", "45%"],
    ["pdt6", "FreeFire is number one", "13.590", "7.475", "45%"],
    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"],
    ["pdt7", "Redmi Note 13 Pro", "11.990", "6.595", "60%"],
    ["pdt8", "Ak Blue Dragon Lv7", "15.990", "9.594", "40%"],
    ["pdt9", "Mp40 Death Lightning", "13.590", "7.475", "45%"],
    ["pdt4", "Gay Phone 1", "13.590", "7.475", "45%"],
    ["pdt5", "Gay Phone 2", "13.590", "7.475", "45%"],
    ["pdt6", "FreeFire is number one", "13.590", "7.475", "45%"]
];
addProductToList("phone_list", arr_phone);

// Them cac btn cho cac phan cua filter

function addButtonCheckbox(id_group_button, arr_data) {
    const group = document.getElementById(id_group_button);
    arr_data.forEach(item => {
        group.innerHTML += `
            <div class="form-check mb-2">
                <input type="checkbox" class="btn-check" id="${item[0]}" autocomplete="off">
                <label for="${item[0]}" class="btn btn-outline-danger py-1 rounded-3" style="">${item[1]}</label>
            </div>
        `
    })
}

const arr_Ram = [
    ["ft1_ip1", "3GB"],
    ["ft1_ip2", "4GB"],
    ["ft1_ip3", "6GB"],
    ["ft1_ip4", "8GB"]
]
const arr_Rom = [
    ["ft2_ip1", "32GB"],
    ["ft2_ip2", "64GB"],
    ["ft2_ip3", "128GB"],
    ["ft2_ip4", "256GB"],
    ["ft2_ip5", "512GB"],
    ["ft2_ip6", "1TB"]
]
const arr_System = [
    ["ft4_ip1", "Android"],
    ["ft4_ip2", "IOS"],
    ["ft4_ip3", "GAY"]
]
const arr_Nfc = [
    ["ft5_ip1", "Yes"],
    ["ft5_ip2", "No"]
]
const arr_Simcard = [
    ["ft6_ip1", "No"],
    ["ft6_ip2", "1"],
    ["ft6_ip3", "2"]
]
const arr_Color = [
    ["ft7_ip1", "White"],
    ["ft7_ip2", "Black"],
    ["ft7_ip3", "Blue"],
    ["ft7_ip4", "Yellow"],
    ["ft7_ip5", "Red"],
    ["ft7_ip6", "Pink"]
]
addButtonCheckbox("filter_ram", arr_Ram);
addButtonCheckbox("filter_rom", arr_Rom);
addButtonCheckbox("filter_system", arr_System);
addButtonCheckbox("filter_nfc", arr_Nfc);
addButtonCheckbox("filter_simcard", arr_Simcard);
addButtonCheckbox("filter_color", arr_Color);