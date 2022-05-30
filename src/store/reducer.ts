import {LLV_PUSHED} from "./action"

export const initState = {
    pushremaining : Math.floor(Math.random() *100)
    
}
const reducer = (state :any, action :any ) => {
    switch(action.type){
        case LLV_PUSHED :
            return {...state,
                pushremaining : action.payload
            }
      
            default :
            throw new Error('Invalid action.')
    }
}
export default reducer