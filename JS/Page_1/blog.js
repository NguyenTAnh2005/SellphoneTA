// HAM LOAD HEADER 
import { loadHeaderFooter } from "../helper_function_all.js"
loadHeaderFooter("./");

function getBlogVipHtml(img, title, intro, link, index) {
    return `<div class="carousel-item pb-3 container-fluid ${index === 0 ? "active" : ""}">
                <div class="row">
                    <div class="col-12 mt-2 mt-md-0 col-md-5 d-flex align-items-center">
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
function getIndicatorsItem(index) {
    return `<button type="button" data-bs-target="#blog_banner" data-bs-slide-to="${index}" class="${index === 0 ? "active" : ""}"></button>`
}
async function addBlogToCarouselSlide() {
    let response = await fetch("JSON/list_vipblog.json");
    let arr_vipblog = await response.json();
    let blog_banner_slide = document.getElementById("blog_banner_slide");
    let blogvip_indicator = document.getElementById("blogvip_indicators");
    blog_banner_slide.innerHTML = "";
    blogvip_indicator.innerHTML = "";
    let html_carousel_inner = ``
    let html_indicators = '';
    arr_vipblog.forEach((bl, index) => {
        html_carousel_inner += getBlogVipHtml(bl.img, bl.title, bl.intro, bl.link, index);
        html_indicators += getIndicatorsItem(index);
    });
    blog_banner_slide.innerHTML += html_carousel_inner;
    blogvip_indicator.innerHTML += html_indicators;
}
addBlogToCarouselSlide();