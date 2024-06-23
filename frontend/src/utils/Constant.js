
const backend =
  "https://mern-ecommerce-git-main-sandeepreddys-projects.vercel.app/";
const RegisterApi = {
  register: {
    url: `${backend}/api/register`,
    method: "post",
  },
  login: {
    url: `${backend}/api/login`,
    method: "post",
  },
  logout: {
    url: `${backend}/api/Logout`,
    method: "post",
  },
  current_user: {
    url: `${backend}/api/user-details`,
    method: "get",
  },
  allUser: {
    url: `${backend}/api/all-user`,
    method: "post",
  },
  allProducts: {
    url: `${backend}/api/get-product`,
    method: "get",
  },
  updateUser: {
    url: `${backend}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backend}/api/add-products`,
    method: "post",
  },
  updateProduct: {
    url: `${backend}/api/update-product`,
    method: "post",
  },
  deleteProduct: {
    url: `${backend}/api/delete-product`,
    method: "delete",
  },
  categoryProduct: {
    url: `${backend}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backend}/api/category-product`,
    method: "post",
  },
  addToCartProduct: {
    url: `${backend}/api/addtocart`,
    method: "post",
  },
  productDetails: {
    url: `${backend}/api/product-details`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backend}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backend}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backend}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backend}/api/delete-cart-product`,
    method: "delete",
  },
  searchProduct: {
    url: `${backend}/api/search`,
    method: "get",
  },
};
export default RegisterApi;