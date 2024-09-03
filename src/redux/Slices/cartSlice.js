// import { createSlice } from "@reduxjs/toolkit";

// // Helper function to load cart details from localStorage
// const loadCartDetails = () => {
//     const cart = parseInt(localStorage.getItem("cart")) || 0;
//     const total = parseInt(localStorage.getItem("total")) || 0;
//     const totalItems = parseInt(localStorage.getItem("totalItems")) || 0;
//     return { cart, total, totalItems };
// };

// // Initial state with values from localStorage or defaults
// const initialState = loadCartDetails();

// const cartslice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             state.cart++;
//             state.totalItems++;
//             state.total += 4332;
//             localStorage.setItem("cart", state.cart);
//             localStorage.setItem("totalItems", state.totalItems);
//             localStorage.setItem("total", state.total);
//         },
//         removeFromCart: (state, action) => {
//             state.cart--;
//             state.totalItems--;
//             state.total -= 4332;
//             localStorage.setItem("cart", state.cart);
//             localStorage.setItem("totalItems", state.totalItems);
//             localStorage.setItem("total", state.total);
//         },
//         resetCart: (state, action) => {
//             state.cart = 0;
//             state.total = 0;
//             state.totalItems = 0;
//             localStorage.setItem("cart", state.cart);
//             localStorage.setItem("totalItems", state.totalItems);
//             localStorage.setItem("total", state.total);
//         },
//     },
// });

// export const { addToCart, removeFromCart, resetCart } = cartslice.actions;

// export default cartslice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// Helper function to load cart details from localStorage
const loadCartDetails = () => {
    const cart = parseInt(localStorage.getItem("cart")) || 0;
    const total = parseInt(localStorage.getItem("total")) || 0;
    const totalItems = parseInt(localStorage.getItem("totalItems")) || 0;
    return { cart, total, totalItems };
};

// Initial state with values from localStorage or defaults
const initialState = loadCartDetails();

const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart++;
            state.totalItems++;
            state.total += 4332;
            localStorage.setItem("cart", state.cart);
            localStorage.setItem("totalItems", state.totalItems);
            localStorage.setItem("total", state.total);
        },
        removeFromCart: (state, action) => {
            if (state.cart > 0 && state.totalItems > 0) {
                state.cart--;
                state.totalItems--;
                state.total -= 4332;
                localStorage.setItem("cart", state.cart);
                localStorage.setItem("totalItems", state.totalItems);
                localStorage.setItem("total", state.total);
            }
        },
        resetCart: (state, action) => {
            state.cart = 0;
            state.total = 0;
            state.totalItems = 0;
            localStorage.setItem("cart", state.cart);
            localStorage.setItem("totalItems", state.totalItems);
            localStorage.setItem("total", state.total);
        },
    },
});

export const { addToCart, removeFromCart, resetCart } = cartslice.actions;

export default cartslice.reducer;


