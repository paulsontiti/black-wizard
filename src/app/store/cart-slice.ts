import { createSlice } from "@reduxjs/toolkit";
import { FoodType } from "../projects/food-odering-app/components/FoodCard";


export type CartType ={
    foodItems:FoodType[]
    deliveryPrice:number
    addressId:string
    totalToPay:number
}

export const cartJSON = () => {
   
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const cartStr = localStorage.getItem("cart");
      //console.log(cartStr)
      if (cartStr) {
        const cart = JSON.parse(JSON.stringify(cartStr));
        if (cart !== "undefined") {
          //console.log(cart )
          return JSON.parse(cart) as CartType;
        }
      }
    }
    
    return {} as CartType;
  };

type InitialStateType = {
  cart: CartType;
};
const initialState: InitialStateType = {
  cart: cartJSON(),
};
const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cart  = {
          deliveryPrice:0,
          totalToPay:0,
          addressId:'',
          foodItems:[],
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
      updateTotalToPay: (state, action) => {
        state.cart.totalToPay  = action.payload
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
      addDeliveryAddressToCart: (state, action) => {
        state.cart.addressId  = action.payload
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
      updateDeliveryPrice: (state, action) => {
      
      state.cart.deliveryPrice  = action.payload
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addFoodItemsToCart:(state,action)=>{
      const foodItems = state.cart.foodItems ? state.cart.foodItems : []
  
     state.cart.foodItems = foodItems.concat(...action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
      addFoodToCart: (state, action) => {
       
          const food:FoodType = {...action.payload}
          food.noInCart ? food.noInCart++ : food.noInCart = 1
          
        state.cart.foodItems.push(food);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
      // increaseProductInCart: (state, action) => {
      //   const product = state.cart.products.find(
      //     (pro) => pro.slug === action.payload
      //   );
  
      //   if (product) {
      //     product.noInCart++;
      //   }
      //   state.cart.products
      //     .filter((pro) => pro.slug !== action.payload)
      //     .push(product as ProductType);
  
      //   localStorage.setItem("cart", JSON.stringify(state.cart));
      // },
      // decreaseProductInCart: (state, action) => {
      //   const product = state.cart.products.find(
      //     (pro) => pro.slug === action.payload
      //   );
  
      //   if (product) {
      //     product.noInCart > 0 && product.noInCart--;
         
      //     if (product.noInCart === 0) {
      //       state.cart.products = state.cart.products.filter(
      //         (pro) => pro.slug !== action.payload
      //       );
      //     } else {
      //       state.cart.products
      //         .filter((pro) => pro.slug !== action.payload)
      //         .push(product as ProductType);
      //     }
      //     localStorage.setItem("cart", JSON.stringify(state.cart));
      //   }
        
      // },
      // deleteProductInCart: (state, action) => {
        
      //     state.cart.products = state.cart.products.filter(
      //         (pro) => pro.slug !== action.payload
      //       );
      //       localStorage.setItem("cart", JSON.stringify(state.cart));
          
          
      //   },
    },
    extraReducers: (builder) => {
      // builder.addCase(fetchUser.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.user = action.payload;
      // });
      // builder.addCase(fetchUser.pending, (state) => {
      //   state.loading = true;
      // });
    },
  });
  
  export const {clearCart,updateTotalToPay,addDeliveryAddressToCart, addFoodItemsToCart,addFoodToCart,
    //  addToCart, increaseProductInCart, decreaseProductInCart,deleteProductInCart,
     updateDeliveryPrice } =
    cartSlice.actions;
  
  export default cartSlice.reducer;
  
