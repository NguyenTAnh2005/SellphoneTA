// HAM LOAD HEADER 
import { loadHeaderFooter } from "../helper_function_all.js"
loadHeaderFooter("./");
//===================== GET HTML CAROUSEL-ITEM 
function getBlogVipHtml(img, title, intro, link, index) {
    return `<div class="carousel-item pb-3 container-fluid ${index === 0 ? "active" : ""}">
                <div class="row">
                    <div class="col-12 mt-2 col-md-5 d-flex align-items-center justify-content-center">
                        <img src="Images/Blog_imgs/${img}.png" class="w-100 rounded-3">
                    </div>
                    <div class="col-12 mt-2 mt-md-0 col-md-7 ps-2 pt-3">
                        <h5 class="text-truncate" title="${title}">${title}</h5>
                        <p class="m-0 overflow-y-auto" style="max-height: 150px;min-height: 150px;">
                            ${intro}
                        </p>
                        <div class="text-end">
                            <a href="${link}" class="me-4 text-decoration-none text-reset fw-semibold fs-5">
                                See more
                                <i class="bi bi-chevron-double-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`
}
//====================== GET INDICATOR
function getIndicatorsItem(index) {
    return `<button type="button" data-bs-target="#blog_banner" data-bs-slide-to="${index}" class="${index === 0 ? "active" : ""}"></button>`
}
//====================== ADD BLOG VIP TO SLIDE
let response1 = await fetch("JSON/list_vipblog.json");
let arrbl_bannner = await response1.json();
async function addBlogToCarouselSlide() {
    let carousel_inner = document.getElementById("blog_banner_slide");
    let indicator = document.getElementById("blogvip_indicators");
    carousel_inner.innerHTML = "";
    indicator.innerHTML = "";
    let html_carousel_inner = ``
    let html_indicators = '';
    arrbl_bannner.forEach((bl, index) => {
        html_carousel_inner += getBlogVipHtml(bl.img, bl.title, bl.intro, bl.link, index);
        html_indicators += getIndicatorsItem(index);
    });
    carousel_inner.innerHTML += html_carousel_inner;
    indicator.innerHTML += html_indicators;
}
addBlogToCarouselSlide();

//======================== GET BLOG ELEMENT HTML
function getBlogElementHtml(img, title, intro, link) {
    return `<div class="d-flex align-items-center justify-content-around bg-light  border border-danger border-1 my-3 bg-white rounded-3">
                <img src="Images/Blog_imgs/${img}.png" class="rounded-2" style="width: 15%;">
                <div class="d-flex" style="flex-direction: column;width: 70%;">
                    <span class="fw-semibold m-0 text-truncate" title="${title}">${title}</span>
                    <span class="m-0 small" style="max-height: 40px;overflow-y: hidden;">
                        <sup>${intro}</sup>
                    </span>
                </div>
                <div style="width: 5%;">
                    <a href="${link}" class="btn btn-outline-danger rounded-pill p-0 px-1" title="See more">
                        <i class="bi bi-chevron-right"></i>
                    </a>
                </div>
            </div>`
}

//======================== ADD BLOG TO LIST MONTHLY
let respone2 = await fetch("JSON/list_vipblog.json");
let arrbl_monthly = await respone2.json();
async function addBlogToMonthly() {
    let listbl_monthly = document.getElementById("list_blog_monthly");
    listbl_monthly.innerHTML = "";
    let html_listbl_monthly = "";
    arrbl_monthly.forEach(bl => {
        console.log(bl.title);
        html_listbl_monthly += getBlogElementHtml(bl.img, bl.title, bl.intro, bl.link);
    });
    listbl_monthly.innerHTML += html_listbl_monthly;
}
addBlogToMonthly();

//======================== ADD BLOG TO LIST ALL
let respone3 = await fetch("JSON/list_blog.json");
let arrbl_all = await respone3.json();
async function addBlogToAll() {
    let listbl_all = document.getElementById("list_blog_all");
    listbl_all.innerHTML = "";
    let html_listbl_all = "";
    arrbl_monthly.forEach(bl => {
        console.log(bl.title);
        html_listbl_all += getBlogElementHtml(bl.img, bl.title, bl.intro, bl.link);
    });
    listbl_all.innerHTML += html_listbl_all;
}
addBlogToAll();