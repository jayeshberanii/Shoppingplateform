const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: "",
  },
  reducers: {
    startfetching(state, ation) {
      return {
        ...state,
        loading: true,
      };
    },
    fetchingsuccess(state,action){
        return{
            loading:false,
            products:action.payload,
            error:''
        }
    },
    fetchingerror(state,action){
        return{
            loading:false,
            products:[],
            error:action.payload
        }
    }
  },
});
export const{fetchingerror,
    fetchingsuccess,
    startfetching}=productSlice.actions

export default productSlice.reducer

