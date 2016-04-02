const API_ROOT = 'http://dev.api.togoapp.link/v1';
import {
	RATINGS_COLLECTION_LOAD, RATINGS_COLLECTION_REFRESH,
	NOTIFICATIONS_COLLECTION_LOAD, NOTIFICATIONS_COLLECTION_REFRESH,
	DELIVERED_COLLECTION_LOAD, DELIVERED_COLLECTION_REFRESH,
	DELIVERER_COLLECTION_LOAD, DELIVERER_COLLECTION_REFRESH,
	ORDERED_COLLECTION_LOAD, ORDERED_COLLECTION_REFRESH,
	WATCHINGS_COLLECTION_LOAD, WATCHINGS_COLLECTION_REFRESH,
	GET_ACCOUNT_INFO,
	CREATE_ORDER
} from './';

export default function (urlPath, token, params, actionName) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			switch(actionName) {
				case CREATE_ORDER:
					return resolve({
						data: {
							success: true
						}
					});
				case GET_ACCOUNT_INFO:
					return resolve({
						data: {
							photo: {
								url: 'http://dev.static.togoapp.link/photos/1b/69/79/0d/fe/1e/4d/99/95/1a/f7/94/74/d9/c6/db.jpg',
							},
							name: 'Milk & Honey',
							marking: 7,
							deliveredTimes: 33,
							orderedTimes: 8,
							ratingCount: 33
						}
					});
				case DELIVERER_COLLECTION_LOAD:
				case DELIVERER_COLLECTION_REFRESH:
					return resolve({
						"data": Array(params.size).fill().map(() => ({
							id: 'sdfsdf', name: 'Milk & Honey', avatarUrl: 'http://dev.static.togoapp.link/photos/1b/69/79/0d/fe/1e/4d/99/95/1a/f7/94/74/d9/c6/db.jpg', rates: 4, marking: 7
						}))
					});
				case RATINGS_COLLECTION_LOAD:
				case RATINGS_COLLECTION_REFRESH:
					return resolve({
						"data": Array(params.size).fill().map(() => ({
							name: 'Milk & Honey', avatarUrl: 'http://dev.static.togoapp.link/photos/1b/69/79/0d/fe/1e/4d/99/95/1a/f7/94/74/d9/c6/db.jpg', rating: 4, time: '2016-03-21T15:49:24.872000+00:00'
						}))
					});
				case NOTIFICATIONS_COLLECTION_LOAD:
				case NOTIFICATIONS_COLLECTION_REFRESH:
					return resolve({
						"data": Array(params.size).fill().map(() => ({
							message: 'Someone is delivering at satay world! Check ot out now!', type: 'message', time: '2016-03-21T15:49:24.872000+00:00'
						}))
					});
				case WATCHINGS_COLLECTION_LOAD:
				case WATCHINGS_COLLECTION_REFRESH:
					return resolve({
						"data": Array(params.size).fill().map(() => ({
							name: 'Milk & Honey', distance: '100m', category: 'BBQ', price_tier: 2, imageUrl: 'http://dev.static.togoapp.link/photos/7c/6a/7a/23/37/68/46/41/95/fd/25/bd/23/2c/fd/62.jpg'
						}))
					});
				case ORDERED_COLLECTION_LOAD:
				case ORDERED_COLLECTION_REFRESH:
				case DELIVERED_COLLECTION_LOAD:
				case DELIVERED_COLLECTION_REFRESH:
					return resolve({
						"data": Array(params.size).fill().map(() => ({
								"status": "accepted",
					      "shop_name": "Milk & Honey",
					      "shop_id": "56bbd82da403f74a1273d9fb",
					      "rated": false,
					      "delivery_fee": {
					        "amount": "1.00",
					        "currency": "SGD"
					      },
					      "id": "56f01804a403f756488cf19f",
					      "deliverer_id": "56f01500a403f756488cf18a",
					      "update_time": "2016-03-21T15:49:24.872000+00:00",
					      "inactive_time": "2016-03-21T15:51:24.872000+00:00",
					      "user": {
					        "id": "56d6e3a25ce3995ce0c9a200",
					        "name": "Test User 1",
					        "photo": {
					          "width": 320,
					          "height": 320,
					          "url": "http://dev.static.togoapp.link/photos/1b/69/79/0d/fe/1e/4d/99/95/1a/f7/94/74/d9/c6/da.jpg"
					        },
					        "gender": "male",
					        "open_id_type": "test",
					        "rating": 0
					      },
					      "deliver_to": "Payalaba",
					      "items_ordered": "Mocha",
					      "deliverer_user": {
					        "id": "56d6e3ad5ce3995ce0c9a201",
					        "name": "Test User 2",
					        "photo": {
					          "width": 320,
					          "height": 320,
					          "url": "http://dev.static.togoapp.link/photos/1b/69/79/0d/fe/1e/4d/99/95/1a/f7/94/74/d9/c6/db.jpg"
					        },
					        "gender": "male",
					        "open_id_type": "test",
					        "rating": 0
					      }
						}))
					});
			}
		}, 2000);
	});
}