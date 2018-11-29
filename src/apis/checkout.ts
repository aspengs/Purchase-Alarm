let config  = require('../../config/config');
const fetch = require('node-fetch');
const CHECKOUT_CORE_URL = config.services.checkout_core.base_url;

export let getCart = (cartId: string, options:Option , include: Include, refresh: boolean) : Promise<Response>=> {
    
    var url = CHECKOUT_CORE_URL + "/carts/" + cartId;
    url += include !== Include.None || refresh ? "?" : ""; 

    options.timeout = options.timeout || config.services.cart_timeout
    if (refresh){
        url += "refresh=true";
        options.timeout = config.services.cart_full_timeout
    }

    if (include !== Include.None) {
        url += refresh ? "&" : "";
        options.timeout = config.services.cart_full_timeout

        if (include == Include.Meta){
            url += "include=metadata";
        }else if(include == Include.Payment){
            url += "include=paymentOptions";
        }
    } 

    return fetch(url);
};

export class Option  {
    headers: object;
    timeout: number;
    constructor(timeout: number, xBrand:string) {        
        if(xBrand === "compumundo")
            this.headers = {"X-Brand": "compumundo"};
        else
            this.headers = {"X-Brand": "garbarino"};
        this.timeout = timeout;
    }
}
export enum Include {Payment, Meta, None}