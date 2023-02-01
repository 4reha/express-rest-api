import { log } from 'console';
import app from '../server';
import request from 'supertest';

describe('GET /', () => {
	it('Should sen back some data', async () => {
		const res = await request(app)
			.get('/')
			
			expect(res.body.message).toBe('hello')
			expect(res.status).toBe(200)
	});
});