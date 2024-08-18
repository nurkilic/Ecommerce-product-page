import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

type CartType = {
    id: number,
    img:string,
    name:string,
    piece:number,
    price:number,
  }

// Define a type for the slice state
interface ProductState {
  open: boolean,
  selectedProduct:number,
  selectedProduct2:number,
  opendialog:boolean,
  total:number,
  value:number,
  product: CartType[],
}

const getCartFromLocalStorage = (): CartType[] => {
  const storage = localStorage.getItem("productCart")
  
  // Uzun yol : 
  // if (storage) {
  //   return JSON.parse(storage)
  // } else {
  //   return [];
  // }

  return storage ? JSON.parse(storage) : []
}



// Define the initial state using that type
const initialState: ProductState = {
  open: false,
  selectedProduct: 0,
  opendialog: false,
  selectedProduct2: 0,
  total: 0,
  value: 1,
  product: getCartFromLocalStorage(),
}

export const ProductState = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },

    handleImage:(state, action: PayloadAction<number>)=>{
      state.selectedProduct=action.payload

    },
    handleImage2:(state, action: PayloadAction<number>)=>{
      state.selectedProduct2=action.payload

    },
    handleNext:(state)=>{
     if(state.selectedProduct!==3)
     {
      state.selectedProduct+=1;
     }

    },
    handlePrevious:(state)=>{
      if(state.selectedProduct!==0)
      {
       state.selectedProduct-=1;
      }
 
     },
     handleNext2:(state)=>{
      if(state.selectedProduct2!==3)
      {
       state.selectedProduct2+=1;
      }
 
     },
     handlePrevious2:(state)=>{
       if(state.selectedProduct2!==0)
       {
        state.selectedProduct2-=1;
       }
  
      },
     openDialog:(state)=>{
      state.opendialog=true;
      
     },
     closeDialog:(state)=>{
      state.opendialog=false;
      state.selectedProduct2=0;
     },
     calculateTotal:(state)=>{        
      state.total = state.product[0].price * state.product[0].piece;
     },
     valueIncrement:(state)=>{
      state.value+=1
     },
     valueDecrement:(state)=>{
      if(state.value>1)
      state.value-=1
     },

      // ADD BASKET
     addBasket:(state, action: PayloadAction<CartType>)=>{

      const findProduct = state.product.find((item) => item.id === action.payload.id)

      if (findProduct) {
        state.product[0].piece += state.value
      } else {
        state.product = [action.payload]
      }

      localStorage.setItem("productCart", JSON.stringify(state.product))
    },

     removeAllBasket:(state)=>{
      state.product = [];
      state.total = 0;

      localStorage.setItem("productCart", JSON.stringify(state.product))
     },
     checkoutProduct: (state) => {
      state.product = [];
      state.total = 0;
      state.value = 1

      localStorage.setItem("productCart", JSON.stringify(state.product))
     }
  }
})

export const { toggleDrawer ,handleImage,handlePrevious,handleNext,openDialog,closeDialog ,handleNext2,handlePrevious2,handleImage2 ,calculateTotal,valueIncrement,valueDecrement,addBasket,removeAllBasket, checkoutProduct} = ProductState.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products

export default ProductState.reducer