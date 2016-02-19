import { LOAD_ORDERS } from '../actions/action-types';

export default function (orders = [], action) {
	switch(action.type) {
		case LOAD_ORDERS:
			return [
				{ deliverer: 'deliverer', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'deliverer', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'deliverer', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'deliverer', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'deliverer', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'deliverer', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'deliverer', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' }
			];
		default:
			return [
				{ deliverer: 'sdfsdf', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'wegwe', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: '334543', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'dfgeg', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'dfsgpdfg', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'gggggg', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' },
				{ deliverer: 'ertr44', name: 'Mike Lim', shop: 'The Satayhood', distance: '100m' }
			];
	}
}