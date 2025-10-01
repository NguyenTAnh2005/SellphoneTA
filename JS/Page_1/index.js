// HAM LOAD HEADER
import { addProductToList, loadHeaderFooter, addBlogToList, updateModal } from "../helper_function_all.js"

loadHeaderFooter("./");
addProductToList("hotsale_list", "JSON/list_pdt.json");
addBlogToList("blog_list", "JSON/list_blog.json");
updateModal("blog_list");
