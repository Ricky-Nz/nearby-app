import 'babel-polyfill';
import { expect } from 'chai';
import {
	TOKEN, USER_ID,
	SHOP_COLLECTION_REFRESH, shopCollectionRefresh,
	SHOP_COLLECTION_LOAD, shopCollectionLoad
} from '../app/actions';

describe('Async Action Full Coverage Test', function () {
	this.timeout(5000);

	it('shopCollectionRefresh', function (done) {
		new Promise(function (resolve, reject) {
			shopCollectionRefresh({
				token: TOKEN,
				longitude: '103.868601',
				latitude: '1.3202973',
				distance: 1000,
				size: 5
			})(function (action) {
				if (!action.running) {
					resolve(action);
				}
			});
		}).then(result => {
			expect(result.type).to.equal(SHOP_COLLECTION_REFRESH);
			expect(result.error).to.be.an('undefined');
			expect(result.data).to.have.property('shops');
			expect(result.data.shops).to.be.an('array');
			expect(result.data.shops).to.have.lengthOf(5);
			done();
		}).catch(error => done(error));
	});

	it('shopCollectionLoad', function (done) {
		new Promise(function (resolve, reject) {
			shopCollectionLoad({
				token: TOKEN,
				longitude: '103.868601',
				latitude: '1.3202973',
				distance: 1000,
				offset: 5,
				size: 5
			})(function (action) {
				if (!action.running) {
					resolve(action);
				}
			});
		}).then(result => {
			expect(result.type).to.equal(SHOP_COLLECTION_LOAD);
			expect(result.error).to.be.an('undefined');
			expect(result.data).to.have.property('shops');
			expect(result.data.shops).to.be.an('array');
			expect(result.data.shops).to.have.lengthOf(5);
			done();
		}).catch(error => done(error));
	});
});

