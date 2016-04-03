import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createReview } from '../actions';
import ReviewCreateDialog from '../components/ReviewCreateDialog';

const orderSelector = state => state.order.data;

const actionStateSelector = state => state.order.reviewCreating;

const actionResultSelector = state => state.order.error;

const mapStateToProps = createSelector(
	orderSelector,
	actionStateSelector,
	actionResultSelector,
	(order, running, error) => ({
		...order,
		running,
		error: error ? error : null
	})
);

const mapActionToProps = (dispatch) => ({
	createReview: ({rating, comment}) => {
		dispatch(createReview({rating, comment}));
	}
});

export default connect(mapStateToProps, mapActionToProps)(ReviewCreateDialog);