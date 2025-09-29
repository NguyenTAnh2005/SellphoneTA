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

    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"],
    ["pdt7", "Redmi Note 13 Pro", "11.990", "6.595", "60%"],
    ["pdt8", "Ak Blue Dragon Lv7", "15.990", "9.594", "40%"],
    ["pdt9", "Mp40 Death Lightning", "13.590", "7.475", "45%"],

    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"],
    ["pdt7", "Redmi Note 13 Pro", "11.990", "6.595", "60%"],
    ["pdt8", "Ak Blue Dragon Lv7", "15.990", "9.594", "40%"],
    ["pdt9", "Mp40 Death Lightning", "13.590", "7.475", "45%"],

    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"],
    ["pdt7", "Redmi Note 13 Pro", "11.990", "6.595", "60%"],
    ["pdt8", "Ak Blue Dragon Lv7", "15.990", "9.594", "40%"],
    ["pdt9", "Mp40 Death Lightning", "13.590", "7.475", "45%"],

    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"],
    ["pdt7", "Redmi Note 13 Pro", "11.990", "6.595", "60%"],
    ["pdt8", "Ak Blue Dragon Lv7", "15.990", "9.594", "40%"],
    ["pdt9", "Mp40 Death Lightning", "13.590", "7.475", "45%"],

    ["pdt1", "IphoneX Vjppro", "11.990", "6.595", "60%"],
    ["pdt2", "RedMagic 8 Pro", "15.990", "9.594", "40%"],
    ["pdt3", "OPPO RENO 12 5G", "13.590", "7.475", "45%"],
    ["pdt4", "Realme 9 Pro", "13.590", "7.475", "45%"],
    ["pdt5", "Xiaomi 11T 5G", "13.590", "7.475", "45%"],
    ["pdt6", "SamSung Galaxy S23 Ultra", "13.590", "7.475", "45%"]
];
// Function render so sp theo so trang
// 1 list gia lap dai, dung slice de cat ra Sl sp cua tung trang
const items_per_page = 24;
function getCountPage(arr) {
    return Math.ceil(arr.length / items_per_page);
}

function renderProduct(page_index, id_list, arr_org) {
    // cat tu dau den dau
    var start = (page_index - 1) * items_per_page;
    var end = start + items_per_page;
    const phone_list = document.getElementById(id_list);
    const arr_slice = arr_org.slice(start, end);
    phone_list.innerHTML = "";
    arr_slice.forEach(item => {
        phone_list.innerHTML += `
            <a class="col mt-4 text-decoration-none text-reset" href="second_page/product_detail.html" title="${item[1]}">
                <div class="card p-1 border-1 border-danger rounded-2" id="product_item">
                    <div class="card_img d-flex justify-content-center">
                        <img loading="lazy" class="w-50 mx-auto product_img" src="Images/List_product_Lab00/${item[0]}.png">
                    </div>
                    <div class="card-body pb-0">
                        <h6 class="text-center text-truncate fw-semibold m-0 text-danger">${item[1]}</h6>
                            <span class="badge bg-success rounded-pill position-absolute"
                            style="top:1px;right:1px">
                                <i class="bi bi-arrow-down-short fs-6"></i>
                                ${item[4]}
                            </span>
                        <div class="text-xl-end text-center">
                            <sub class="mb-1 text-decoration-line-through">${item[2]}.000 vnđ</sub>
                        </div>
                        <div class="row text-center text-xl-end fw-medium text-success"><span>${item[3]}.000 vnđ</span></div>
                    </div>
                </div>
            </a>`
    });
}

// render pagnigation
// Boi vi can co su them moi - xoa cai cu  (class aciive de nhan biet dang o trang nao)
//  nên mỗi lần reload sp theo hàm render thì reset lại pagination và thêm class active cho cái cần thêm
let current_page = 1;
function renderPagination(arr) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ``;
    const fragment = document.createDocumentFragment();
    //Them nut prev
    const prev_li = document.createElement("li");
    prev_li.classList.add("page-item");
    prev_li.innerHTML = `<a href="#" class="page-link" data-page-index="prev">PREV</a>`
    fragment.appendChild(prev_li);

    //Them cac nut stt trang
    var count_page = getCountPage(arr);
    for (let i = 1; i <= count_page; i++) {
        const li = document.createElement("li");
        li.className = "page-item" + (i === current_page ? " active" : "");
        li.innerHTML = `<a href="#" class="page-link" data-page-index="${i}">${i}</a>`;
        fragment.appendChild(li);
    }
    //Them nut Next
    const next_li = document.createElement("li");
    next_li.classList.add("page-item");
    next_li.innerHTML = `<a href="#" class="page-link" data-page-index="next">NEXT</a>`
    fragment.appendChild(next_li);
    pagination.appendChild(fragment);
    //
    pagination.onclick = function (e) {
        //Tim the a dc click trong ptu cha, neu dung cho cua the a tra ve no, hay click vao ptu conn cua no cug tra ve nho vao tham so cua no
        const a = e.target.closest("a.page-link");
        if (a == null) { return }
        e.preventDefault();
        const index = a.getAttribute("data-page-index");
        if (index === "prev" && current_page > 1) { current_page -= 1; }
        else if (index === "next" && current_page < getCountPage(arr_phone)) {
            current_page += 1;
        }
        else if (!isNaN(Number(index))) { current_page = Number(index); }
        else return;
        renderProduct(current_page, "phone_list", arr_phone);
        renderPagination(arr_phone);
    }

}
renderProduct(current_page, "phone_list", arr_phone);
renderPagination(arr_phone);



//Them checkbox button cho cac truong filter
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