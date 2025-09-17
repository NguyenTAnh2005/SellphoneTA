import { ChangeTypePass } from "../helper_function_all.js";
ChangeTypePass("li_ip2");
ChangeTypePass("su_ip6");
ChangeTypePass("su_ip7");

// An hien cac form 
function add_remove_class(f1, f2, f3) {
    f1.classList.remove("d-none");
    f2.classList.add("d-none");
    f3.classList.add("d-none");
}
const f_login = document.getElementById("LOGIN");
const f_signup = document.getElementById("SIGNUP");
const f_forgotpass = document.getElementById("FORGOTPASS");

document.getElementById("LI_SU").addEventListener("click", () => {
    add_remove_class(f_signup, f_login, f_forgotpass);
});
document.getElementById("LI_FP").addEventListener("click", () => {
    add_remove_class(f_forgotpass, f_login, f_signup);
});
document.getElementById("SU_LI").addEventListener("click", () => {
    add_remove_class(f_login, f_signup, f_forgotpass);
});
document.getElementById("FP_LI").addEventListener("click", () => {
    add_remove_class(f_login, f_signup, f_forgotpass);
});
// function changeForm(link1,link2,link3,link4) {
//     const f1 = document.getElementById("LOGIN");
//     const f2 = document.getElementById("SIGNUP");
//     const f3 = document.getElementById("FORGOTPASS");
//     f1.addEventListener("click", () => {
//         add_remove_class(f1, f2, f3);
//     });
//     f2.addEventListener("click", () => {
//         add_remove_class(f2, f1, f3);
//     });
//     f3.addEventListener("click", () => {
//         add_remove_class(f3, f1, f2);
//     });
// }


