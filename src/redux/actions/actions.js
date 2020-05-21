import {BTC, BNB, ETH, XRP, TRX, FAV, INIT, SDT, TUSD, BUSD, ALLUSD, ALL, SEARCH, ADDFAV} from '../action-types'



export const init = datas => ({type: INIT, data: datas});

export const addFav = datas => ({type: ADDFAV, data: datas});

export const search = datas => ({type: SEARCH, data: datas});

export const bnb = () => ({type: BNB});

export const btc = () => ({type: BTC});

export const eth = () => ({type: ETH});

export const trx = () => ({type: TRX});

export const xrp = () => ({type: XRP});

export const fav = () => ({type: FAV});

export const sdt = () => ({type: SDT});

export const tusd = () => ({type: TUSD});

export const busd = () => ({type: BUSD});

export const allusd = () => ({type: ALLUSD});

export const all = () => ({type: ALL});




// export const init = datas => ({type: INIT, data: datas});

// export const bnb = datas => ({type: BNB, data: datas});

// export const btc = datas => ({type: BTC, data: datas});

// export const eth = datas => ({type: ETH, data: datas});

// export const trx = datas => ({type: TRX, data: datas});

// export const xrp = datas => ({type: XRP, data: datas});

// export const fav = datas => ({type: FAV, data: datas});

// export const sdt = datas => ({type: SDT, data: datas});

// export const tusd = datas => ({type: TUSD, data: datas});

// export const busd = datas => ({type: BUSD, data: datas});

// export const allusd = datas => ({type: ALLUSD, data: datas});

// export const all = datas => ({type: ALL, data: datas});
