export const auth = {
  login: "/auth/user/login",
  register: "/auth/user/register",
  logout: "/auth/user/logout",
  getUser: "/auth/user/getme",
};
export const authPartner = {
  login: "/auth/foodpartner/login",
  register: "/auth/foodpartner/register",
  logout: "/auth/foodpartner/logout",
  getUser: "/auth/foodpartner/getme",
};

export const reel = {
  getReels: "/food",
  postReel: "/food",
  getReelById:"/food/get",
  getReelByPartner:"/foodpartner/get",
  deleteReelByPartner:"/food/delete"
};

export const like = {
  toggleLike: "/food/like",
};
export const save = {
  toggleSave: "/food/save",
  getSaveReels: "/food/save"
};
export const partnerProfile = {
  visit: "/foodpartner",
  getAllReels:"/foodpartner/get"
};

export const cart = {
  getCart: "/user/cart/get",
  getAllCarts: "/user/cart/getAll",
  addToCart: "/user/cart/add",
  removeFromCart: "/user/cart/delete",
  updateCart: "/user/cart/update"
};

export const order = {
  orderCreate: "/order/create",
  getAllOrders:"/order/getAll"
};