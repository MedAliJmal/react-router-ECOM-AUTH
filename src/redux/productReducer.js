import { ADD_PROD, DELETE_PROD, EDIT_PROD } from "./actionTypes";

const initialState = {
  products: [
    {
      id: Math.random(),
      name: "Basket Ball",
      price: 30,
      imgUrl: "https://image.smythstoys.com/zoom/198494_3.jpg",
      discount: 15,
    },
    {
      id: Math.random(),
      name: "Tennis racket",
      price: 35,
      imgUrl:
        "https://www.racketworld.co.uk/cdn/shop/products/Fed26BlackFriday_600x.jpg?v=1669726902",
      discount: 25,
    },
    {
      id: Math.random(),

      name: "FCB Shirt",
      price: 45,
      imgUrl:
        "https://diamu.com.bd/wp-content/uploads/2023/06/FC-Barcelona-Home-Authentic-Kit-2023-24.jpg",
      discount: 10,
    },
    {
      id: Math.random(),

      name: "UCL Ball 2023",
      price: 25,
      imgUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwSmPbKaAV8MG44ata6XiekYNoURT4ndSSAiRyVGMjXnSfalpQaJ0hUcT-MilE_9iOYw4qWUWBVxU08lYqFnIU4-wdjyiW_7M8EP8zZL7EB_k8E7DsNq6a8wuBSAEVnioTKM5wMZQtIf2EIGC8KnSPnl8rva5h4hW9YzR3OG6dBXGvjx7sZjNpyUqV/s1600/champions%20league%202023%20final%20ball%20%284%29.jpg",
      discount: 5,
    },
    {
      id: Math.random(),

      name: "MAN City Shirt",
      price: 45,
      imgUrl: "https://www.sportsdirect.com/images/imgzoom/37/37840918_xxl.jpg",
      discount: 8,
    },
    {
      id: Math.random(),

      name: "PROTECTION ELBOW LONG SLEEVE",
      price: 15,
      imgUrl:
        "https://www.hummel.tn/28297-large_default/protection-elbow-long-sleeve.jpg",
      discount: 6,
    },
  ],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PROD:
      return { ...state, products: [...state.products, payload] };
    case DELETE_PROD:
      return {
        ...state,
        products: state.products.filter((el) => el.id !== payload),
      };
    case EDIT_PROD:
      return {
        ...state,
        products: state.products.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
