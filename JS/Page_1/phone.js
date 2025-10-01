// HAM LOAD HEADER 
import { loadHeaderFooter, getHtmlProduct } from "../helper_function_all.js"
loadHeaderFooter("./");
// THEM CAC LOGO CHO PHONE
// const grp_logo = ["iphone", "samsung", "oppo", "realme", "vivo", "xiaomi", "honor", "nubia"];
const grp_logo = [
    ["ft_ip0_1", "iphone"],
    ["ft_ip0_2", "samsung"],
    ["ft_ip0_3", "oppo"],
    ["ft_ip0_4", "realme"],
    ["ft_ip0_5", "vivo"],
    ["ft_ip0_6", "xiaomi"],
    ["ft_ip0_7", "honor"],
    ["ft_ip0_8", "nubia"]
]
grp_logo.forEach(hang => {
    document.getElementById("phone_logo_group").innerHTML += `
            <div class="form-check mb-2">
                <input type="checkbox" class="btn-check" id="${hang[0]}" autocomplete="off">
                <label for="${hang[0]}" class="btn py-1 rounded-3">
                    <img src="Images/Manufacturer/${hang[1]}_logo.png" class="logoitem_img">
                </label>
            </div>`
});

//============== FETCH JSON TO LIST
async function getArrPhone(path_file_json) {
    let respose = await fetch(path_file_json);
    let arr = await respose.json();
    return arr;
}
// ======= GET SL PAGE
function getCountPage(arr) {
    return Math.ceil(arr.length / items_per_page);
}

//========== SL PRODUCT CHO MOI PAGE
const items_per_page = 24;

const arr_phone_org = await getArrPhone("JSON/list_pdt.json");

//=========== RENDER PRODUCT
async function renderHomeProduct(page_index, id_list) {
    // cat tu dau den dau
    var start = (page_index - 1) * items_per_page;
    var end = start + items_per_page;
    const phone_list = document.getElementById(id_list);
    const arr_slice = arr_phone_org.slice(start, end);
    phone_list.innerHTML = "";
    arr_slice.forEach(pdt => {
        phone_list.innerHTML += getHtmlProduct(pdt.id, pdt.name, pdt.org_price, pdt.new_price, pdt.count_sale);
    });
}

// ============ RENDER THANH PAGINATION (XOA HET => THEM LAI + SET ACITVE CHO PAGE_CURRENT)
let current_page = 1;
export async function renderPagination(arr) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ``;
    const fragment = document.createDocumentFragment();
    //===========Them nut prev
    const prev_li = document.createElement("li");
    prev_li.classList.add("page-item");
    prev_li.innerHTML = `<a href="#" class="page-link" data-page-index="prev">PREV</a>`
    fragment.appendChild(prev_li);

    //==========Them cac nut stt trang
    var count_page = getCountPage(arr);
    for (let i = 1; i <= count_page; i++) {
        const li = document.createElement("li");
        li.className = "page-item" + (i === current_page ? " active" : "");
        li.innerHTML = `<a href="#" class="page-link" data-page-index="${i}">${i}</a>`;
        fragment.appendChild(li);
    }
    //===========Them nut Next
    const next_li = document.createElement("li");
    next_li.classList.add("page-item");
    next_li.innerHTML = `<a href="#" class="page-link" data-page-index="next">NEXT</a>`
    fragment.appendChild(next_li);
    pagination.appendChild(fragment);
    //==================================
    pagination.onclick = function (e) {
        //Tim the a dc click trong ptu cha, neu dung cho cua the a tra ve no, hay click vao ptu conn cua no cug tra ve nho vao tham so cua no
        const a = e.target.closest("a.page-link");
        if (a == null) { return }
        e.preventDefault();
        const index = a.getAttribute("data-page-index");
        if (index === "prev" && current_page > 1) { current_page -= 1; }
        else if (index === "next" && current_page < getCountPage(arr_phone_org)) {
            current_page += 1;
        }
        else if (!isNaN(Number(index))) { current_page = Number(index); }
        else return;
        renderHomeProduct(current_page, "phone_list");
        renderPagination(arr);

        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}
renderHomeProduct(current_page, "phone_list");
renderPagination(arr_phone_org);

//========================Them checkbox button cho cac truong filter
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
addButtonCheckbox("filter_ram", arr_Ram);
addButtonCheckbox("filter_rom", arr_Rom);
addButtonCheckbox("filter_system", arr_System);
addButtonCheckbox("filter_nfc", arr_Nfc);
addButtonCheckbox("filter_simcard", arr_Simcard);
addButtonCheckbox("filter_color", arr_Color);