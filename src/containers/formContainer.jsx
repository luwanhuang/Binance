import {connect} from 'react-redux';
import FormAll from '../components/form';
import {init, addFav} from '../redux/actions/actions';


export default connect(state => ({status: state.reducerSwitch.status, stocks: state.reducerInitial}), {init, addFav})(FormAll)