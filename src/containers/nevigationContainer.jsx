import {connect} from 'react-redux';
import Nevigation from '../components/nevigation';
import {bnb, btc, eth, trx, xrp, fav, sdt, tusd, busd, allusd, all, search} from '../redux/actions/actions';

export default connect(state => ({status: state.reducerSwitch.status, stocks: state.reducerInitial}), 
{bnb, btc, eth, trx, xrp, fav, sdt, tusd, busd, allusd, all, search})(Nevigation)