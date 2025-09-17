const html_header = `
<div class="container-fluid d-flex justify-content-around">
            <!-- Logo + chữ -->
            <a href="./index.html" class="navbar-brand d-flex align-items-center ">
                <!--d-flex              : dùng flexbox để sắp xếp ngang-->
                <img src="./Images/Logo.png" alt="Logo" width="30" height="30"
                    class="d-inline-block align-text-top me-2">
                <!--d-inline-block : hiển thị ảnh dạng inline-block (xếp cùng hàng với chữ)
                align-text-top : căn ảnh lên cùng hàng với text
                me-2           : margin-end = 2 (tạo khoảng cách bên phải giữa logo và chữ)-->
                MY WEBSITE
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="true">
                <!--navbar-toggler : nút bấm hiển thị khi màn hình nhỏ
                data-bs-toggle="collapse" : chỉ định sẽ mở/đóng một khối collapse
                data-bs-target="#navbarNav": khối menu có id="navbarNav" sẽ bị ẩn/hiện
                aria-* : hỗ trợ accessibility (không ảnh hưởng giao diện)-->
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ms-auto me-auto">
                    <li class="nav-item me-4 ">
                        <a href="./index.html" class="nav-link d-flex align-items-center" aria-current="page">
                            <i class="bi me-1 bi-house"></i>
                            Home
                        </a>
                    </li>

                    <li class="nav-item me-4 dropdown">
                        <a href="#" class="nav-link d-flex align-items-center dropdown-toggle" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi me-1 bi-phone"></i>
                            Manufacturer
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/all_logo.png" width="30" height="30" class="me-2">
                                    All
                                </a>
                            </li>
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/iphone_logo.png" width="30" height="30" class="me-2">
                                    IPHONE
                                </a>
                            </li>
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/samsung_logo.png" width="30" height="30" class="me-2">
                                    SAMSUNG
                                </a>
                            </li>
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/oppo_logo.png" width="30" height="30" class="me-2">
                                    OPPO
                                </a>
                            </li>
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/vivo_logo.png" width="30" height="30" class="me-2">
                                    VIVO
                                </a>
                            </li>
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/nubia_logo.png" width="30" height="30" class="me-2">
                                    NUBIA
                                </a>
                            </li>
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/realme_logo.png" width="30" height="30" class="me-2">
                                    REALME
                                </a>
                            </li>
                            <li><a href="./phone.html" class="dropdown-item d-flex align-items-center">
                                    <img src="./Images/xiaomi_logo.png" width="30" height="30" class="me-2">
                                    XIAOME/REDMI
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item me-4"><a href="./sale.html" class="nav-link d-flex align-items-center"><i
                                class="bi bi-emoji-heart-eyes me-1"></i>Sale</a></li>
                    <li class="nav-item me-4"><a href="./blog.html" class="nav-link d-flex align-items-center"><i
                                class="bi bi-globe-americas me-1"></i>BLOG</a>
                    </li>
                    <li class="nav-item me-4"><a href="./setting.html" class="nav-link d-flex align-items-center"><i
                                class="bi me-1 bi-gear"></i>Setting</a>
                    </li>
                    <li class="nav-item me-4"><a href="./account.html" class="nav-link d-flex align-items-center"><i
                                class="bi bi-person me-1"></i>Account</a>
                    </li>

                </ul>
                <form role="search" class="d-flex">
                    <input type="search" class="form-control me-4" placeholder="searching here">
                    <button class="btn btn-outline-light rounded-pill" type="submit">
                        <i class="bi bi-search "></i>
                    </button>
                </form>
                <a href="sencond_page/login_signup_forgot.html" class="btn btn-outline-light ms-4 rounded-pill">
                    <span class="me-2">Log In</span>
                    <i class="bi bi-person-vcard"></i>
                </a>
            </div>
        </div>`

// Ham tai header
export function loadHeader() {
    document.getElementById("HEADER").innerHTML = html_header;
}

// Ham hien - an mat khau 

export function ChangeTypePass(id_input) {
    const input = document.getElementById(id_input);
    const eye_icon = document.getElementById(id_input + "_eye");

    if (!input || !eye_icon) return; // không có thì thoát ra

    eye_icon.addEventListener("click", () => {
        if (input.type == "password") {
            input.type = "text";
            eye_icon.classList.remove("bi-eye-slash");
            eye_icon.classList.add("bi-eye");
        }
        else {
            input.type = "password";
            eye_icon.classList.remove("bi-eye");
            eye_icon.classList.add("bi-eye-slash");
        }
    })
}

// Ham them DL gia lap vao list 


export function addProductToList(id_list, arr_product) {
    const list_html = document.getElementById(id_list);
    arr_product.forEach(item => {
        list_html.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3 my-4 ">
                <div class="card py-3" id="product_item">
                    <div class="card_img d-flex justify-content-center">
                        <img class="card-img-top product_img" src="./Images/List_product_Lab00/${item[0]}.png"
                            style="width: 150px;height: 150px;">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center text-truncate fw-bold">${item[1]}</h5>
                        <p class="text-decoration-line-through text-center">Org Price: ${item[2]}.000 vnđ</p>
                        <p class="fw-semibold d-flex justify-content-evenly">
                            New Price: <span class="text-success">${item[3]}.000 vnđ</span>
                            <span class="badge bg-danger d-flex align-items-center">OFF ${item[4]}</span>
                        </p>
                        <div class=" row d-flex justify-content-evenly">
                            <a class=" col-12 col-md-5 btn btn-outline-primary rounded-pill" type="button" href="product_detail.html">Click = GAY</a>
                        </div>
                    </div>

                </div>
            </div>
        `
    });
}

