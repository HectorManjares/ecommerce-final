import { items } from '../data/db.js'


export function productos(){

    if(!window.localStorage.getItem("products")) {
        window.localStorage.setItem("products",JSON.stringify(items))
    }

}