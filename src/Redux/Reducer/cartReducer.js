import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_AMOUNT_INTO_CART,
    DECREASE_AMOUNT_INTO_CART
  } from "../Constants/ProductContants";
  
  const InitialState={
      loading:false,
      products:[],
      error:''
  }
  
  export const cartReducer=(state1=InitialState,action)=>{
      switch(action.type){          
          case ADD_TO_CART:
              return{
                  ...state1,
                  loading:false,
                  products:[
                    ...state1.products,
                    action.payload
                ]             
            }  
        case REMOVE_FROM_CART:
            const filteredPeople = state1.products.filter((item) => item.id !== action.payload);            
            return{
                ...state1,
                loading:false,
                products:[
                    ...filteredPeople               
              ] 
            }     
            case INCREASE_AMOUNT_INTO_CART:   
                state1.products.forEach(item=>{
                    if(item.id===action.payload){
                        item.amount++
                        item.total=item.price*item.amount
                    }
                })
                console.log(INCREASE_AMOUNT_INTO_CART);           
                return{
                    ...state1,
                    loading:false,
                    products:[
                        ...state1.products        
                  ] 
                } 
            case DECREASE_AMOUNT_INTO_CART:
                state1.products.forEach(item=>{
                    if(item.id===action.payload){
                        item.amount--
                        item.total=item.price*item.amount
                    }
                })
                console.log(DECREASE_AMOUNT_INTO_CART);
                return{
                    ...state1,
                    loading:false,
                    products:[
                        ...state1.products      
                  ] 
                }
          default:
              return state1
      }
  }
  