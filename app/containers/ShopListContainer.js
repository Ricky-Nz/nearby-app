import { connect } from 'react-redux';
import { selectShop } from '../actions';
import ShopList from '../components/ShopList';

const mapActionToProps = (dispatch) => ({
	onSelectShop: (id) => {
		dispatch(selectShop(id));
	}
});

export default connect(null, mapActionToProps)(ShopList);