import {INIT, SEARCH, ADDFAV} from '../action-types'

const initState = {
    btc : [],
    eth : [],
    bnb : [],
    trx : [],
    xrp : [],
    sdt : [],
    tusd : [],
    busd : [],
    rest : [],
    allusd : [],
    all : [],
    original: [],
    fav: [],
    finish: false,
    search:""
}

export function reducerInitial(state = initState, action) {
    switch (action.type) {
    case ADDFAV:
        let temp_fav = state.fav;
        temp_fav.push(action.data);
        return Object.assign({}, state, {fav:temp_fav});
    case INIT:
        let btc = [];
        let eth = [];
        let bnb = [];
        let trx = [];
        let xrp = [];
        let sdt = [];
        let tusd = [];
        let busd = [];
        let rest = [];
        let allusd = [];
        let all = [];
        let original = [];
        action.data.forEach(
        stock => {
            let coin = {
                symbol: stock.symbol,
                sym:stock.symbol.slice(-3),
                percent: stock.priceChangePercent,
                last: stock.lastPrice,
                high: stock.highPrice,
                low: stock.lowPrice,
                favorate:0
            
            }
                original.push(coin)
                switch(coin.sym){
                    case "BTC":
                        btc.push(coin);
                        break;
                    case "ETH":
                        eth.push(coin);
                        all.push(coin);
                        break;
                    case "BNB":
                        bnb.push(coin);
                        break;
                    case "TRX":
                        trx.push(coin);
                        all.push(coin);
                        break;
                    case "XRP":
                        xrp.push(coin);
                        all.push(coin);
                        break;
                    case "SDT":
                        sdt.push(coin);
                        break;
                    case "USD":
                        coin.symbol.slice(-4) === "TUSD"? tusd.push(coin):busd.push(coin)
                        allusd.push(coin);
                        break;
                    default:
                        rest.push(coin);
                        break;
                }
            });
            return Object.assign({}, state, {btc,eth,bnb,trx,xrp,sdt,tusd,busd,rest,allusd,all,original,finish:true});
    case SEARCH:
        return Object.assign({}, state, {search:action.data});
    default:
        return state
  }
}

// let temp_btc = [];
// let temp_eth = [];
// let temp_bnb = [];
// let temp_trx = [];
// let temp_xrp = [];
// let temp_sdt = [];
// let temp_tusd = [];
// let temp_busd = [];
// let temp_rest = [];
// let temp_allusd = [];
// let temp_all = [];
// var rowData = state.original.filter((coin)=>(coin.symbol.slice(0,-3).indexOf(action.data) !== -1))
// rowData.map(
//     coin => {
//             switch(coin.sym){
//                 case "BTC":
//                     temp_btc.push(coin);
//                     break;
//                 case "ETH":
//                     temp_eth.push(coin);
//                     temp_all.push(coin);
//                     break;
//                 case "BNB":
//                     temp_bnb.push(coin);
//                     break;
//                 case "TRX":
//                     temp_trx.push(coin);
//                     temp_all.push(coin);
//                     break;
//                 case "XRP":
//                     temp_xrp.push(coin);
//                     temp_all.push(coin);
//                     break;
//                 case "SDT":
//                     temp_sdt.push(coin);
//                     break;
//                 case "USD":
//                     coin.symbol.slice(-4) == "TUSD"? temp_tusd.push(coin):temp_busd.push(coin)
//                     temp_allusd.push(coin);
//                     break;
//                 default:
//                     temp_rest.push(coin);
//                     break;
//             }
//         });
//         return Object.assign({}, state, {btc,eth,bnb,trx,xrp,sdt,tusd,busd,rest,allusd,all,finish:true});