const API_ROOT = 'http://dev.api.togoapp.link/v1';

export default function (urlPath, token, params) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			switch(urlPath) {
				case 'users/orders':
				case 'users/orders/active':
				case 'users/orders/delivered':
					return resolve({
					  "data": [
					    {
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
					    }
					  ]
					});
			}
		}, 1000);
	});
}