// HAM LOAD HEADER 
import { loadHeaderFooter } from "../helper_function_all.js"
loadHeaderFooter("./");

// LOad Dl item vao list 
const arr_2_product = [
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
]
import { addProductToList } from "../helper_function_all.js";
addProductToList("product_list", arr_2_product);
