import { ON,OFF } from '../constant'

export const onDialog = (state)=>({type:ON,data:state})
export const offDialog = (state)=>({type:OFF,data:state})