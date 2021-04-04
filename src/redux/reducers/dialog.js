import { ON,OFF } from '../constant'

const initState=true;
export const dialogReducer = (preState = initState,action)=>{
    
    const { type } = action;
    console.log(type)
    switch (type) {
        case ON:
           return true;
        case OFF:
            return false;
        default:
            return preState;
    }

}