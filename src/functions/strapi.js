export const STRAPI_SERVER = "https://strapi.totaltrailerparts.com";

export const callStrapiBackend = async (
  type = "GET",
  content,
  parameters = {},
  data = null
) => {
  const jwt = JSON.parse(localStorage.getItem("user"))?.jwt;

  let params = "";
  let id = null;

  if (parameters.id) {
    id = parameters.id;
    delete parameters.id;
  }

  const keys = Object.keys(parameters);

  keys.forEach((key, i) => {
    params += `${i ? "&" : "?"}${key}=${parameters[key]}`;
  });

  let options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: type,
  };


  if (jwt) {
    options.headers.Authorization = `Bearer ${jwt}`;
  }

  if (data) {
    options.body = JSON.stringify({ data });
  }

  return (
    await fetch(
      `${STRAPI_SERVER}/api/${content}${id ? `/${id}` : ""}${params}`,
      options
    )
  ).json();
};

export const getUser = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }

  window.location.pathname = "/login";
};
export const mergeAttributesWithId = (item) => (item ? {
  ...item.attributes,
  id: item.id,
} : item);

const strapi = {
  get: (content, parameters) =>
    callStrapiBackend("GET", content, { populate: "*", ...parameters }),
  post: (content, data) =>
    callStrapiBackend("POST", content, {}, data),
  put: (content, parameters, data) =>
    callStrapiBackend("PUT", content, parameters, data),
  delete: (content, parameters) =>
    callStrapiBackend("DELETE", content, parameters),
  getBestSellers: () => {
    return callStrapiBackend("GET", "bestsellers", {
      "populate[product][populate][0]": "img",
    });
  },
  getCart: async () => {
    const data = (
      await callStrapiBackend("GET", "carts", {
        "populate[product][populate][0]": "img",
        "filters[user][id][$eq]": getUser().id,
      })
    ).data;

    return data.map((item) => ({
      ...mergeAttributesWithId(item),
      product: {
        ...mergeAttributesWithId(item.attributes.product.data),
      },
    }));
  },
  addToCart: (data) =>
    callStrapiBackend("POST", "carts", {}, { ...data, user: getUser().id }),
  deleteCartItem: (id) => callStrapiBackend("DELETE", "carts", { id }),
  emptyCart: async () => {
    const cartItems = (
      await callStrapiBackend("GET", "carts", {
        "populate[product][populate][0]": "img",
        "filters[user][id][$eq]": getUser().id,
      })
    ).data;

    const res = await Promise.all(cartItems.map(async (item) =>
      callStrapiBackend("DELETE", "carts", { id: item.id })
    ));

    return res;
  },
  updateCartItem: (id, data) => callStrapiBackend("PUT", "carts", { id }, data),

  getWishlist: async () => {
    const data = (
      await callStrapiBackend("GET", "wishlists", {
        "populate[product][populate][0]": "img",
        "filters[user][id][$eq]": getUser().id,
      })
    ).data;

    return data.map((item) => ({
      ...mergeAttributesWithId(item),
      product: {
        ...mergeAttributesWithId(item.attributes.product.data),
      },
    }));
  },
  addToWishlist: (data) =>
    callStrapiBackend("POST", "wishlists", {}, { ...data, user: getUser().id }),
  deleteWishlistItem: (id) => callStrapiBackend("DELETE", "wishlists", { id }),
  updateWishlistItem: (id, data) =>
    callStrapiBackend("PUT", "wishlists", { id }, data),
  isInCart: async (product_id) => {
    await callStrapiBackend("GET", "cart", {
      "filters[product][$eq]": product_id,
    });
  },
  getImageURL: (data) =>
    `${STRAPI_SERVER}${data?.data?.attributes.formats.thumbnail.url}`,
  addToCheckout: (data) =>
    callStrapiBackend("POST", "checkouts", {}, { ...data, user: getUser().id }),
  getCurrentCheckout: () =>
    callStrapiBackend("GET", "checkouts", {
      "filters[user][id][$eq]": getUser().id,
      "filters[status][$eq]": "UNPAID",
    }),
  getCatalogue: async (subCategory) => {
    const data = (
      await callStrapiBackend("GET", "products", {
        "filters[subCategory][$eq]": subCategory,
      })
    ).data;

    return data.map((item) => ({
      ...mergeAttributesWithId(item),
    }));
  },
  postReview: async (data) =>
    callStrapiBackend("POST", "reviews", {}, data)
};

export default strapi;
