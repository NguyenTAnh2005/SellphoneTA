// HAM LOAD HEADER
import { loadHeaderFooter } from "../helper_function_all.js"
loadHeaderFooter("./");

// Load product sale

import { addProductToList } from "../helper_function_all.js";
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
]
addProductToList("hotsale_list", arr_2_product);
addProductToList("phone_special_list", arr_2_product);
const str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nesciunt commodi expedita dolorum, ipsa quod? Labore fuga ut delectus itaque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nesciunt commodi expedita dolorum, ipsa quod? Labore fuga ut delectus itaque?"
const arr_blog = [
    ["blog_id_1", "blog_img_1", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_2", "blog_img_2", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_3", "blog_img_1", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_4", "blog_img_2", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_5", "blog_img_1", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_6", "blog_img_2", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_7", "blog_img_2", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_8", "blog_img_1", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_9", "blog_img_2", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_10", "blog_img_1", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"],
    ["blog_id_11", "blog_img_2", "Top 5 khau sung manh nhat FF", str, "https://sv.bdu.edu.vn/#/home"]
]
import { addBlogToList } from "../helper_function_all.js";
addBlogToList("blog_list", arr_blog);
import { updateModal } from "../helper_function_all.js";
updateModal();