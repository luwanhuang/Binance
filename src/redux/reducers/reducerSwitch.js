import {BTC, BNB, ETH, XRP, TRX, FAV, SDT, TUSD, BUSD, ALLUSD, ALL} from '../action-types'

let initState = {
    status : "btc"
}
export function reducerSwitch(state = initState, action) {
    switch (action.type) {
        case FAV:
            return {status : "fav"};
        case BTC:
            return {status : "btc"};
        case ETH:
            return {status : "eth"};
        case BNB:
            return {status : "bnb"};
        case TRX:
            return {status : "trx"};
        case XRP:
            return {status : "xrp"};
        case SDT:
            return {status : "sdt"};
        case TUSD:
            return {status : "tusd"};
        case BUSD:
            return {status : "busd"};
        case ALLUSD:
            return {status : "allusd"};
        case ALL:
            return {status : "all"};
        default:
            return state
        
    }

}

// useEffect(()=>{
//     switch(props.keyword){
//         case "BTC":
//             setStocks(btc);
//             break;
//         case "ETH":
//             setStocks(eth);
//             break;
//         case "BNB":
//             setStocks(bnb);
//             break;
//         case "TRX":
//             setStocks(trx);
//             break;
//         case "XRP":
//             setStocks(xrp);
//             break;
//         case "SDT":
//             setStocks(sdt);
//             break;
//         case "TUSD":
//             setStocks(tusd);
//             break;
//         case "BUSD":
//             setStocks(busd);
//             break;
//         case "ALLUSD":
//             var a = [];
//             var b = a.concat(tusd).concat(busd);
//             setStocks(b);
//             break;
//         case "ALL":
//             var a = [];
//             var b = a.concat(eth).concat(xrp).concat(trx);
//             setStocks(b);
//             break;
//         default:
//             setStocks(rest);
//             break;
//     };
// },[props.keyword])