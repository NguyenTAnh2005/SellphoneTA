const html_header = `
        <div class="container-fluid">
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

                <ul class="navbar-nav mx-auto me-auto">
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
                <form role="search" class="d-flex mt-2 mt-md-0 ">
                    <input type="search" class="form-control me-2 rounded-pill" placeholder="searching here">
                    <button class="btn btn-outline-light rounded-pill" type="submit">
                        <i class="bi bi-search "></i>
                    </button>
                </form>
                <a href="sencond_page/login_signup_forgot.html"
                    class="btn btn-outline-light mt-4 mt-xl-0 ms-0 ms-xl-4 ms-md-0 d-md-block  rounded-pill">
                    <span class="me-2 fs-6 fw-semibold">Log In</span>
                    <i class="bi bi-person-vcard"></i>
                </a>
            </div>
        </div>`


const html_footer = `
<div class="row pt-3">
            <div class="col-12 col-md-6 col-xl-3 mb-4">
                <span class="h4 text-uppercase">Thong tin lien he</span>
                <ul class="list-unstyled mt-2">
                    <li class="ms-2 mb-3">
                        <a class="text-decoration-none text-reset d-flex align-items-center"
                            href="https://zalo.me/0328884320">
                            <img src="Images/zalo.png" height="40" width="40" class="rounded-circle">
                            <span class="ms-2 fs-5 fw-semibold">0328884320</span>
                        </a>
                    </li>
                    <li class="ms-2 mb-3">
                        <a class="text-decoration-none text-reset d-flex align-items-center"
                            href="mailto:23050118@student.bdu.edu.vn">
                            <img src="Images/gmail.png" height="40" width="40" class="rounded-circle">
                            <span class="ms-2 fs-5 fw-semibold">23050118@student.bdu.edu.vn</span>
                        </a>
                    </li>
                    <li class="ms-2 mb-3">
                        <a class="text-decoration-none text-reset d-flex align-items-center"
                            href="https://www.facebook.com/share/14QaznFt8ZF">
                            <img src="Images/facebook.png" height="40" width="40" class="rounded-circle">
                            <span class="ms-2 fs-5 fw-semibold">Tuan Anh</span>
                        </a>
                    </li>
                    <li class="ms-2 mb-3">
                        <a class="text-decoration-none text-reset d-flex align-items-center"
                            href="https://youtube.com/@n_t_anh?feature=shared">
                            <img src="Images/youtube.png" height="40" width="40" class="rounded-circle">
                            <span class="ms-2 fs-5 fw-semibold">n_t_anh</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-12 col-md-6 col-xl-3 mb-4">
                <span class="h4 text-uppercase">Chinh sach va ho tro</span>
                <ul class="list-unstyled mt-2">
                    <li class="ms-2 mb-1">
                        <a href="#" class=" fs-5 text-decoration-none text-reset">Chinh sach bao hanh</a>
                    </li>
                    <li class="ms-2 mb-1">
                        <a href="#" class=" fs-5 text-decoration-none text-reset">Chinh sach doi tra / hoan tien</a>
                    </li>
                    <li class="ms-2 mb-1">
                        <a href="#" class=" fs-5 text-decoration-none text-reset">Chinh sach giao hang</a>
                    </li>
                    <li class="ms-2 mb-4">
                        <a href="#" class=" fs-5 text-decoration-none text-reset">Bao mat thong tin khach hang</a>
                    </li>
                    <li class="ms-2 mb-1">
                        <a href="#" class=" fs-5 text-decoration-none text-reset">Huong dan mua hang Online</a>
                    </li>
                    <li class="ms-2 mb-1">
                        <a href="#" class=" fs-5 text-decoration-none text-reset">Huong dan kiem tra chat luong may</a>
                    </li>
                    <li class="ms-2 mb-1">
                        <a href="#" class=" fs-5 text-decoration-none text-reset">Cac cau hoi thuong gap</a>
                    </li>
                </ul>
            </div>

            <div class="col-12 col-md-6 col-xl-3 mb-4">
                <span class="h4 text-uppercase">Dang ky nhan thong bao</span>
                <form action="" method="post" class="mt-4">
                    <div class="form-floating mb-4 ms-0">
                        <input type="text" class="form-control" id="ft_ip1" placeholder="">
                        <label for="ft_ip1">Nhap ten cua ban</label>
                    </div>
                    <div class="form-floating mb-4 ms-0">
                        <input type="email" class="form-control" id="ft_ip2" placeholder="">
                        <label for="ft_ip2">Nhap email cua ban</label>
                    </div>
                    <button type="submit" class="btn btn-danger mb-4 w-100 fs-5 fw-semibold rounded-pill">
                        Dang Ky
                    </button>
                </form>
            </div>

            <div class="col-12 col-md-6 col-xl-3 mb-4">
                <span class="h4 text-uppercase">Ve chung toi</span>
                <ul class="list-unstyled mt-3">
                    <li class="ms-2 mb-3">
                        <i class="bi bi-shop me-2 fs-5"></i>
                        He thong ban dien thoai cu chat luong cao, gia phu hop voi hoc sinh - sinh vien. Kem theo
                        nhieu uu dai khac nua danh cho khach hang!
                    </li>
                    <li class="ms-2 mb-3 fs-6">
                        <i class="bi bi-geo-alt-fill me-2 fs-5"></i>
                        504 Dai lo Binh Duong, P. Phu Loi, TP. Ho Chi Minh
                    </li>
                    <li class="ms-2 mb-3">
                        <i class="bi bi-clock-fill fs-5 me-2"></i>
                        07:30 - 22h30, form Monday to Sunday
                    </li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <p class="text-center mt-0 fw-semibold">
                    @CopyRight by BDUer Vjppro from class 26TH02 (Nguyen Tuan Anh - Le Ngoc Sang - Nguyen Manh Phat - Le
                    Dinh Tuyen). 06, Oct, 2025
                </p>
            </div>
        </div>
`
// Ham tai header
export function loadHeaderFooter() {
    document.getElementById("HEADER").innerHTML = html_header;
    document.getElementById("FOOTER").innerHTML = html_footer;
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

