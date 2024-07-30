import { appStore } from "./appStore";
import { appinit } from "./init";
 export const appReducer=(state=appinit,action)=>{
   switch(action.type){
    case 'updatephotos':
        return {
            ...state,
            photos:action.payload
        }
   }
   return state;
}